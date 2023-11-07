import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from './Login.module.css';
import backgroundImage1 from './background-1.png';
import backgroundImage2 from './background-2.png';
import backgroundImage3 from './background-3.png';
import icon from './icone.png'; // Importando o ícone
import logo2 from './logo 2.png'; // Importando o logo2 padrão
import logo2_3 from './logo 2 3.png'; // Importando a imagem para a Usina da Cana

const images = [backgroundImage1, backgroundImage2, backgroundImage3];

const Login = (props) => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [watermarkImage, setWatermarkImage] = useState(logo2); // Estado para a imagem de watermark

  useEffect(() => {
    const timer = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth <= 768);
      });
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('https://energetic-puce-leg-warmers.cyclic.app/login', { usuario, senha })
      .then(response => {
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('username', usuario);
          localStorage.setItem('role', response.data.role);
          
          props.history.push('/admin/dashboard');
        } else {
          alert('Login falhou');
        }
      });
  };

  const checkEmpresa = (usuario) => {
    axios.get(`https://energetic-puce-leg-warmers.cyclic.app/empresa?usuario=${usuario}`)
      .then(response => {
        if (response.data.success && response.data.empresa) {
          if (response.data.empresa === 'Usina da Cana') {
            setWatermarkImage(logo2_3);
          } else {
            setWatermarkImage(logo2);
          }
        }
      })
      .catch(error => {
        console.error('Erro ao buscar a empresa do usuário:', error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.content}>
          <div className={styles.title}>
            <img src={icon} alt="Icon" className={styles.icon} />
            PAINEL | CONNECT
          </div>
          <form onSubmit={handleLogin} className={styles.form}>
            <input 
              type="text" 
              value={usuario} 
              onChange={(e) => setUsuario(e.target.value)} 
              onBlur={() => checkEmpresa(usuario)} // Adicionando o evento onBlur
              placeholder="Usuário" 
              className={styles.input}
            />
            <input 
              type="password" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              placeholder="Senha" 
              className={styles.input}
            />
            <button type="submit" className={styles.button}>Login</button>
          </form>
          
          <p className={styles.p}><center>Painel desenvolvido por CONNECT FAM Tecnologia | © 2023</center></p>  
        </div>    
      </div>
      
      <div className={styles.rightSide} style={{backgroundImage: `url(${images[backgroundIndex]})`}}>
        {/* Aqui a imagem de marca d'água é controlada pelo estado */}
        <img src={watermarkImage} alt="Logo" className={styles.watermark} />
      </div>
    </div>
  );
};

export default Login;
