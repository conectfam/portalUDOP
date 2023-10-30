import React, { useState, useEffect } from 'react';
import { Col, Card as BootstrapCard, Row, Container } from 'react-bootstrap';
import './styles.dashboard.scss';

const Grafico = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [content, setContent] = useState(null);

  useEffect(() => {
    handleOpenClick('verGraficos','verTrello');
  }, []);

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

  const handleOpenClick = (contentType) => {
    setIsExpanded(true);
    // Define o conteúdo da coluna expandida com base no tipo de conteúdo
    switch (contentType) {
      case 'verTrello':
      setContent(
        <iframe
          title="Trello"
          width="900"
          height="536"
          src="https://trello.com/b/0SzjsfiE/ti-comercial"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      );
      break;
      case 'verGraficos':
        setContent(
          <div>
            <center>
              <iframe
                title="Graficos"
                width="1000"
                height="635"
                src="https://app.powerbi.com/view?r=eyJrIjoiNDI4NTRmZTEtOTU5My00MGJkLTk2NDgtOWQzMWQ1NGNiZDE2IiwidCI6ImMxNTk2NDVkLTM3ZjUtNDg5Ny1hNTQ5LTNhZDIzMDkyZTdjNyJ9"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </center>
            <p>Dash BI de Avaliação dos Treinamentos Presenciais</p>
          </div>
        );
        break;
      case 'eSocial':
        setContent(
          <iframe
          title="E-Social"
          width="900"
          height="550"
          src="https://forms.zohopublic.com/esocial/form/EnviodoESocial/formperma/FuLjyXmuFRHA9dcUFtBFaXAlTkpSTmUW6AJiuI8c9mc"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        );
        break;

      case 'CAT':
        setContent(
          <div>
            <center>
              <iframe
                title="CAT"
                width="900"
                height="536"
                src="https://forms.zohopublic.com/vendas61/form/PREENCHIMENTOCHECKLISTPARAABERTURADECATS2210/formperma/G-YBBYanBv3bWzUDeCWveTNYVBWSqCeILuISBllwQOE"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </center>
            <p>Conteúdo específico para Ver Gráficos</p>
          </div>
        );
        break;

      case 'PPP':
        setContent(
          <div>
            <center>
              <iframe
                title="PPP"
                width="900"
                height="536"
                src="https://app.powerbi.com/view?r=eyJrIjoiNDg2NzAxYzUtMzhhOC00OWQ5LWE4ZDUtOTRlNTA0YmFlYWE4IiwidCI6ImMxNTk2NDVkLTM3ZjUtNDg5Ny1hNTQ5LTNhZDIzMDkyZTdjNyJ9"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </center>
            <p>Conteúdo específico para Ver Gráficos</p>
          </div>
        );
        break;

      case 'PGR':
        setContent(
          <iframe
            title="PGR PCMSO"
            width="900"
            height="550"
            src="https://forms.zohopublic.com/vendas61/form/DadosparaelaboraodosprogramasPRGPCMSO/formperma/24-A-_EX6D2TSTbuLRlJUv6AYv6VQHVTlSaDO2ESPrw"
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

  const handleCardClick = (contentType) => () => {
    handleOpenClick(contentType);
  };

  useEffect(() => {
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('keydown', resetInactivityTimer);
    resetInactivityTimer();

    return () => {
      document.removeEventListener('mousemove', resetInactivityTimer);
      document.removeEventListener('keydown', resetInactivityTimer);
    }
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
        <Col lg="2" sm="2" className="text-center mx-auto">
          <a href="https://forms.zohopublic.com/juliana15/form/ComercialQualitySegEngenhariadeSeguranaeMedicinado/formperma/iKxe7-5DD6rWrFM_duryGABo0x1oPTqqlnpafECN11w" target="_blank">
            <BootstrapCard className="card-stats card-btn">
              <BootstrapCard.Body>
                <div className="d-flex align-items-center justify-content-center" style={{ marginBottom: '15px' }}>
                  <img
                    src="https://imgur.com/AtpGO1b.png"
                    alt="Ícone"
                    style={{ width: '50px', height: '50px' }}
                  />
                  <BootstrapCard.Title as="h4" style={{ fontSize: '15px', marginLeft: '10px' }}>
                    Realizar OS
                  </BootstrapCard.Title>
                </div>
              </BootstrapCard.Body>
            </BootstrapCard>
          </a>
        </Col>

        <Col lg="2" sm="2" className="text-center mx-auto">
          <BootstrapCard 
            className="card-stats card-btn"
            onClick={handleCardClick('eSocial')}
          >
            <BootstrapCard.Body>
              <div className="d-flex align-items-center justify-content-center" style={{ marginBottom: '15px' }}>
                <img
                  src="https://imgur.com/819yZlS.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px', marginLeft: '10px' }}>
                  <a href="https://forms.zohopublic.com/esocial/form/EnviodoESocial/formperma/FuLjyXmuFRHA9dcUFtBFaXAlTkpSTmUW6AJiuI8c9mc" target="_blank">
                    E-Social
                  </a>
                </BootstrapCard.Title>
              </div>
            </BootstrapCard.Body>
          </BootstrapCard>
        </Col>

        
        <Col lg="2" sm="2" className="text-center mx-auto">
          <BootstrapCard 
            className="card-stats card-btn"
            onClick={handleCardClick('PGR')}
          >
            <BootstrapCard.Body>
              <div className="d-flex align-items-center justify-content-center" style={{ marginBottom: '15px' }}>
                <img
                  src="https://imgur.com/IhU0nyh.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px', marginLeft: '10px' }}>
                  <a href="https://forms.zohopublic.com/vendas61/form/DadosparaelaboraodosprogramasPRGPCMSO/formperma/24-A-_EX6D2TSTbuLRlJUv6AYv6VQHVTlSaDO2ESPrw" target="_blank">
                  PGR PCMSO
                  </a>
                </BootstrapCard.Title>
              </div>
            </BootstrapCard.Body>
          </BootstrapCard>
        </Col>

        <Col lg="2" sm="2" className="text-center mx-auto">
          <BootstrapCard 
            className="card-stats card-btn"
            onClick={handleCardClick('CAT')}
          >
            <BootstrapCard.Body>
              <div className="d-flex align-items-center justify-content-center" style={{ marginBottom: '15px' }}>
                <img
                  src="https://imgur.com/Oe4JExc.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px', marginLeft: '10px' }}>
                  <a href="https://forms.zohopublic.com/vendas61/form/PREENCHIMENTOCHECKLISTPARAABERTURADECATS2210/formperma/G-YBBYanBv3bWzUDeCWveTNYVBWSqCeILuISBllwQOE" target="_blank">
                  CAT
                  </a>
                </BootstrapCard.Title>
              </div>
            </BootstrapCard.Body>
          </BootstrapCard>
        </Col>

        <Col lg="2" sm="2" className="text-center mx-auto">
          <BootstrapCard 
            className="card-stats card-btn"
            onClick={handleCardClick('PPP')}
          >
            <BootstrapCard.Body>
              <div className="d-flex align-items-center justify-content-center" style={{ marginBottom: '15px' }}>
                <img
                  src="https://imgur.com/ZgAFGkP.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px', marginLeft: '10px' }}>
                  <a href="https://forms.zohopublic.com/juliana15/form/PPPPerfilProfissiogrficoPrevidencirio/formperma/hm4WW-EyrnN31vW7pD1xOheJkBnz36rN15rYgSR_4-0" target="_blank">
                  PPP
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
export default Grafico;
