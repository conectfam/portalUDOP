import React, { useEffect } from 'react';
import { Col, Card as BootstrapCard, Row, Container } from 'react-bootstrap';
import './styles.dashboard.scss';

const BaseConhecimento = () => {
  let timeout;

  const logoutUser = () => {
    console.log("Usuário foi deslogado devido à inatividade");
    // Remova o token do armazenamento local
    localStorage.removeItem('token');
    // Redirecione o usuário para a página de login
    window.location.href = '/login';
  }

  const resetInactivityTimer = () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(logoutUser, 60 * 60 * 1000);
  }

  useEffect(() => {
    // Adicione os listeners quando o componente é montado
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('keydown', resetInactivityTimer);
    resetInactivityTimer();

    // Remova os listeners quando o componente é desmontado
    return () => {
      document.removeEventListener('mousemove', resetInactivityTimer);
      document.removeEventListener('keydown', resetInactivityTimer);
    }
  }, []);

  return (
    <>
      <Container fluid>      
        <Row className="justify-content-center">
          <Col md={10}>
          <p><center>Video dos Cursos EAD para compartilhar</center></p>
          <p><center>      </center></p>
            <BootstrapCard className="card-stats">
              <div className="iframe-container" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
                <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/QCB01i2ze-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </BootstrapCard>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10}>
          <p><center>Use @menções em seus E-mails #qsdicas</center></p>
            <BootstrapCard className="card-stats">
              <div className="iframe-container" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
                <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/zgv2hH-2rHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </BootstrapCard>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10}>
          <p><center>Direcionar Mensagens do Outlook</center></p>
            <BootstrapCard className="card-stats">
              <div className="iframe-container" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
                <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/EIIiIpbVGlY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </BootstrapCard>
          </Col>
        </Row>
        
      </Container>
    </>
    
  );
};

export default BaseConhecimento;
