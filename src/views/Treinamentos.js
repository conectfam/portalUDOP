import React, { useState, useEffect } from 'react';
import { Col, Card as BootstrapCard, Row, Container } from 'react-bootstrap';
import './styles.dashboard.scss';

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState(null);
  let timeout;

  const logoutUser = () => {
    console.log("Usuário foi deslogado devido à inatividade");
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const resetInactivityTimer = () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(logoutUser, 60 * 60 * 1000);
  };

  useEffect(() => {
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('keydown', resetInactivityTimer);
    resetInactivityTimer();

    return () => {
      document.removeEventListener('mousemove', resetInactivityTimer);
      document.removeEventListener('keydown', resetInactivityTimer);
    };
  }, []);

  useEffect(() => {
    handleOpenClick('Avaliação');
  }, []);

  const handleOpenClick = (contentType) => {
    setIsExpanded(!isExpanded);

    // Define o conteúdo da coluna expandida com base no tipo de conteúdo
    switch (contentType) {
      case 'Avaliação':
        setContent(
          <div>
            <center>
              <iframe
                title="Avaliação"
                width="900"
                height="536"
                src="https://forms.zohopublic.com/bauruqualityseg/form/AvaliaodoTreinamentoInstrutor/formperma/qzaqds9xz8ruMy-PP8opfZQWIT3BHxUItERCUy15SXo"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </center>
            <p>Conteúdo específico para Ver Gráficos</p>
          </div>
        );
        break;

      case 'ListaPresença':
        setContent(
          <div>
            <center>
              <iframe
                title="ListaPresença"
                width="900"
                height="536"
                src="https://forms.zohopublic.com/esocial/form/ListadePresena/formperma/afAultrJQ_AupYfAIET3OTv8DEI_aeZXVK_55qllics"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </center>
            <p>Conteúdo específico para Ver Gráficos</p>
          </div>
        );
        break;
      case 'Certificados':
        setContent(
          <div>
            <center>
              <iframe
                title="Certificados"
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
      case 'Protocolo':
        setContent(
          <div>
            <center>
              <iframe
                title="Protocolo"
                width="900"
                height="536"
                src="https://app.powerbi.com/view?r=eyJrIjoiNDg2NzAxYzUtMzhhOC00OWQ5LWE4ZDUtOTRlNTA0YmFlYWE4IiwidCI6ImMxNTk2NDVkLTM3ZjUtNDg5Ny1hNTQ5LTNhZDIzMDkyZTdjNyJ9"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </center>
            <p> Links para preenchimento de check list  </p>
          </div>
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

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="2" sm="2" className="text-center mx-auto">
            <BootstrapCard
              className="card-stats card-btn"
              onClick={handleCardClick('Avaliação')}
            >
              <BootstrapCard.Body>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ marginBottom: '15px' }}
                >
                  <img
                    src="https://imgur.com/fOHHIWC.png"
                    alt="Ícone"
                    style={{ width: '50px', height: '50px' }}
                  />
                  <BootstrapCard.Title
                    as="h4"
                    style={{ fontSize: '15px', marginLeft: '10px' }}
                  >
                    <a
                      href="https://forms.zohopublic.com/juliana15/form/ComercialQualitySegEngenhariadeSeguranaeMedicinado/formperma/iKxe7-5DD6rWrFM_duryGABo0x1oPTqqlnpafECN11w"
                      target="_blank"
                    >
                      Avaliação
                    </a>
                  </BootstrapCard.Title>
                </div>
              </BootstrapCard.Body>
            </BootstrapCard>
          </Col>

          <Col lg="2" sm="2" className="text-center mx-auto">
            <BootstrapCard
              className="card-stats card-btn"
              onClick={handleCardClick('ListaPresença')}
            >
              <BootstrapCard.Body>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ marginBottom: '15px' }}
                >
                  <img
                    src="https://imgur.com/j0KMEj9.png"
                    alt="Ícone"
                    style={{ width: '50px', height: '50px' }}
                  />
                  <BootstrapCard.Title
                    as="h4"
                    style={{ fontSize: '15px', marginLeft: '10px' }}
                  >
                    <a
                      href="https://forms.zohopublic.com/juliana15/form/ComercialQualitySegEngenhariadeSeguranaeMedicinado/formperma/iKxe7-5DD6rWrFM_duryGABo0x1oPTqqlnpafECN11w"
                      target="_blank"
                    >
                      Lista de Presença
                    </a>
                  </BootstrapCard.Title>
                </div>
              </BootstrapCard.Body>
            </BootstrapCard>
          </Col>

          <Col lg="2" sm="2" className="text-center mx-auto">
            <BootstrapCard
              className="card-stats card-btn"
              onClick={handleCardClick('Certificados')}
            >
              <BootstrapCard.Body>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ marginBottom: '15px' }}
                >
                  <img
                    src="https://imgur.com/MyO5N40.png"
                    alt="Ícone"
                    style={{ width: '50px', height: '50px' }}
                  />
                  <BootstrapCard.Title
                    as="h4"
                    style={{ fontSize: '15px', marginLeft: '10px' }}
                  >
                    <a
                      href="https://forms.zohopublic.com/juliana15/form/ComercialQualitySegEngenhariadeSeguranaeMedicinado/formperma/iKxe7-5DD6rWrFM_duryGABo0x1oPTqqlnpafECN11w"
                      target="_blank"
                    >
                      Certificados
                    </a>
                  </BootstrapCard.Title>
                </div>
              </BootstrapCard.Body>
            </BootstrapCard>
          </Col>

          <Col lg="2" sm="2" className="text-center mx-auto">
            <BootstrapCard
              className="card-stats card-btn"
              onClick={handleCardClick('Protocolo')}
            >
              <BootstrapCard.Body>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ marginBottom: '15px' }}
                >
                  <img
                    src="https://imgur.com/kapSCA4.png"
                    alt="Ícone"
                    style={{ width: '50px', height: '50px' }}
                  />
                  <BootstrapCard.Title
                    as="h4"
                    style={{ fontSize: '15px', marginLeft: '10px' }}
                  >
                    <a
                      href="https://forms.zohopublic.com/juliana15/form/ComercialQualitySegEngenhariadeSeguranaeMedicinado/formperma/iKxe7-5DD6rWrFM_duryGABo0x1oPTqqlnpafECN11w"
                      target="_blank"
                    >
                      Protocolo
                    </a>
                  </BootstrapCard.Title>
                </div>
              </BootstrapCard.Body>
            </BootstrapCard>
          </Col>
        </Row>
        <Row>
          <Col
            lg="12"
            className={`text-center expanded ${isExpanded ? 'show' : ''}`}
          >
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

export default Dashboard;
