import React, { useState, useEffect } from 'react';
import { Col, Card as BootstrapCard, Row, Container } from 'react-bootstrap';
import './styles.dashboard.scss';

const Compras = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState(null);
  const [lastContent, setLastContent] = useState('verGraficos');

  // Adicionamos a função logoutUser 
  const logoutUser = () => {
    console.log("Usuário foi deslogado devido à inatividade");
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  let timeout;
  const resetInactivityTimer = () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(logoutUser, 60 * 60 * 1000);
  }

  useEffect(() => {
    handleOpenClick('verGraficos');
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('keydown', resetInactivityTimer);
    resetInactivityTimer();

    return () => {
      document.removeEventListener('mousemove', resetInactivityTimer);
      document.removeEventListener('keydown', resetInactivityTimer);
    }
  }, []);

  const handleOpenClick = (contentType) => {
    setIsExpanded(true);
    setLastContent(contentType);

    switch (contentType) {
      case 'verGraficos':
        setContent(
          <div>
            <center>
              <iframe
                title="Graficos"
                width="1024"
                height="635"
                src="https://app.powerbi.com/view?r=eyJrIjoiYWJjYTEzYzktZTIwYS00NDE3LWIyYWUtNzkzNmUzMjg2MTJkIiwidCI6ImMxNTk2NDVkLTM3ZjUtNDg5Ny1hNTQ5LTNhZDIzMDkyZTdjNyJ9"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </center>
            <p>Conteúdo específico para Ver Gráficos</p>
          </div>
        );
        break;
      case 'realizarOS':
        setContent(
          <iframe
            title="OS 20"
            width="900"
            height="536"
            src="https://forms.zohopublic.com/bauruqualityseg/form/PedidodeCompra/formperma/Vv5Pb_9dJ5qTqkjBMl7GSQw3KM2VT058iPNT-EM8mQw"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
        break;
      default:
        setContent(null);
        break;
    }
  };

  const handleCardClick = () => {
    if (!isExpanded) {
      handleOpenClick('realizarOS');
    } else {
      if (lastContent === 'realizarOS') {
        handleOpenClick('verGraficos');
      } else {
        handleOpenClick('realizarOS');
      }
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
        <Col lg="2" sm="2" className="text-center mx-auto">
          <BootstrapCard 
            className="card-stats card-btn"
            onClick={handleCardClick}
          >
            <BootstrapCard.Body>
              <div className="d-flex align-items-center justify-content-center" style={{ marginBottom: '15px' }}>
                <img
                  src="https://imgur.com/AtpGO1b.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px', marginLeft: '10px' }}>
                  <a href="https://forms.zohopublic.com/bauruqualityseg/form/PedidodeCompra/formperma/Vv5Pb_9dJ5qTqkjBMl7GSQw3KM2VT058iPNT-EM8mQw" target="_blank">
                    Realizar OS
                  </a>
                </BootstrapCard.Title>
              </div>
            </BootstrapCard.Body>
          </BootstrapCard>
        </Col>
        </Row>
       
        <Row>
          <Col lg="12" className={`text-center expanded ${isExpanded ? 'show' : ''}`}>
            <BootstrapCard className="card-stats">
              <div className="iframe-container">
                {isExpanded && content}
              </div>
            </BootstrapCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Compras;
