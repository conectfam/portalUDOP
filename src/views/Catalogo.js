import React, { useState, useEffect } from 'react';  // Acrescentamos o useEffect
import { Badge, Button, Container } from 'react-bootstrap';
import cursosData from './cursos.json';
import styles from './CursosEad.module.scss';
import CatalogoXLSX from '../views/Catalogo Cursos EAD - Atualizado 31.05.23.xlsx';
import axios from 'axios';

// Adicionamos a função logoutUser 
const logoutUser = () => {
  console.log("Usuário foi deslogado devido à inatividade");
  localStorage.removeItem('token');
  window.location.href = '/login';
}

const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(cursosData);
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Adicionamos as funções do timer de inatividade
  let timeout;
  const resetInactivityTimer = () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(logoutUser, 60 * 60 * 1000);
  }

  useEffect(() => {
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('keydown', resetInactivityTimer);
    resetInactivityTimer();

    return () => {
      document.removeEventListener('mousemove', resetInactivityTimer);
      document.removeEventListener('keydown', resetInactivityTimer);
    }
  }, []);
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm) {
      const filteredResults = cursosData.filter((curso) =>
        curso.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults(cursosData);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CatalogoXLSX;
    link.download = 'Catalogo_Cursos_EAD_Atualizado_31.05.23.xlsx';
    link.click();
  };

  const handleCourseSelection = (e, curso) => {
    const isSelected = selectedCourses.some((c) => c.id === curso.id);

    if (isSelected) {
      setSelectedCourses((prevSelectedCourses) =>
        prevSelectedCourses.filter((c) => c.id !== curso.id)
      );
    } else {
      setSelectedCourses((prevSelectedCourses) => [
        ...prevSelectedCourses,
        { id: curso.id, quantidade: 1 },
      ]);
    }

    // Adicionar classe CSS ao elemento 'treatmentsItem'
    e.currentTarget.parentNode.classList.toggle(styles.selected);
    const floatingButton = document.querySelector('.floatingButton');
    if (floatingButton) {
      floatingButton.classList.toggle(styles.selected, selectedCourses.length > 0);
    }
  };

  const handleQuantityChange = (e, curso) => {
    const quantity = parseInt(e.target.value);
    setSelectedCourses((prevSelectedCourses) =>
      prevSelectedCourses.map((c) =>
        c.id === curso.id ? { ...c, quantidade: quantity } : c
      )
    );
  };

  const handleCheckout = async () => {
    const items = selectedCourses.map((curso) => ({
      title: curso.titulo,
      unit_price: parseFloat(curso.valor),
      quantity: curso.quantidade,
    }));
  
    const preference = {
      items,
    };
  
    try {
      const response = await axios.post('/api/criar-preferencia', preference);
      const { init_point } = response.data;
  
      // Redirecionar para a página de checkout do Mercado Pago
      window.location.href = init_point;
    } catch (error) {
      console.error('Erro ao criar preferência de checkout:', error);
    }
  };
  
  

  return (
    <Container>
      <Button onClick={handleDownload} className="primary" style={{ backgroundColor: '#1A6F45' }}>
        Baixar Catálogo Atualizado
      </Button>

      <div className={styles.searchContainer}>
        <div className={styles['search-bar']}>
          <input
            type="text"
            placeholder="Busca"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className={styles['search-icon']}></div>
        </div>
      </div>
      <div className={`${styles.treatments} ${styles.center}`}>
        {searchResults.map((curso) => {
          const isSelected = selectedCourses.some((c) => c.id === curso.id);
          const selectedCourse = selectedCourses.find((c) => c.id === curso.id);
          return (
            <div
              className={`${styles.treatmentsItem} ${isSelected ? styles.selected : ''}`}
              data-aos="fade-up"
              key={curso.id}
            >
              <div className={styles.images}>
                <img
                  src={curso.imageSrc}
                  alt={curso.titulo}
                  className={styles.image}
                  width={250}
                  height={137}
                />
              </div>
              <h3>{curso.titulo}</h3>
              <div className={styles.description}>
                <p>{curso.descricao}</p>
              </div>
              <div className={styles.courseInfo}>
                <div className={styles.courseInfoItem}>
                  <p className={styles.courseInfoText}>
                    Carga Horaria: {curso.carga_horaria}
                  </p>
                </div>
                <div className={styles.courseInfoItem}>
                  <p className={styles.courseInfoText}>Valor: {curso.valor}</p>
                </div>
              </div>
              <Button
                className={`${styles.courseButton} ${
                  isSelected ? `${styles.danger} ${styles.selectedButton}` : styles.primary
                }`}
                style={{ backgroundColor: '#1A6F45' }}
                onClick={(e) => handleCourseSelection(e, curso)}
              >
                {isSelected ? 'Remover curso' : (
                  <span className="select-course-text">Selecione o curso</span>
                )}
              </Button>

              {isSelected && (
                <div className={styles.quantityOption}>
                  <label htmlFor={`quantity-${curso.id}`}>Quantidade:</label>
                  <select
                    id={`quantity-${curso.id}`}
                    value={selectedCourse.quantidade}
                    onChange={(e) => handleQuantityChange(e, curso)}
                  >
                    {Array.from({ length: 50 }, (_, index) => (
                      <option value={index + 1} key={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Button className={`${styles.floatingButton} floatingButton`} onClick={handleCheckout}>
        <img src="https://i.imgur.com/NTdUTN0.png" alt="Icon" />
        <Badge pill variant="danger" className={`${styles.customBadge} Badge`}>
          {selectedCourses.reduce((total, curso) => total + curso.quantidade, 0)}
        </Badge>
      </Button>

      <div id="checkout-container"></div>
    </Container>
  );
};

export default Catalogo;
