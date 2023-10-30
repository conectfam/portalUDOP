import React, { useEffect } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function LinkToClipboard(link) {
  navigator.clipboard.writeText(link)
    .then(() => {
      console.log('Link copiado para a área de transferência');
    })
    .catch(err => {
      console.error('Erro ao copiar o link: ', err);
    });
}

function TableList() {
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

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Realizar CheckList's</Card.Title>
                <p className="card-category">
                  Clique no link ou leia o Qrcode para acessar o preenchimento dos Formulários
                </p>
              </Card.Header>

              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="botder-0">Link direto CheckList</th>
                      <th className="border-0">QRCode</th>
                      <th className="border-0">Copiar Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href="https://forms.zohopublic.com/juliana15/form/CadastrodeAlunoCursoEAD/formperma/0r9PO01dGPIIQpcEIPEJG6go2MUkIL-c9MfuG71SZ-4" target="_blank"> EAD </a></td>
                      <td><img src="https://imgur.com/qgegUHY.png" alt="QR Code Placeholder" width="100" heith="100" /></td>
                      <td>
                        <button onClick={() => LinkToClipboard('https://forms.zohopublic.com/juliana15/form/CadastrodeAlunoCursoEAD/formperma/0r9PO01dGPIIQpcEIPEJG6go2MUkIL-c9MfuG71SZ-4')}>
                          Copiar Link
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="https://forms.zohopublic.com/vendas61/form/ChecklistdeusodoVeculo/formperma/5uO3SKXxMOdu5iaMPwenTrmiEIXDq3l94YFDj03gNAA" target="_blank"> Controle de Frota </a></td>
                      <td><img src="https://imgur.com/45yFcRb.png" alt="QR Code Placeholder" width="100" heith="100" /></td>
                      <td>
                        <button onClick={() => LinkToClipboard('https://forms.zohopublic.com/vendas61/form/ChecklistdeusodoVeculo/formperma/5uO3SKXxMOdu5iaMPwenTrmiEIXDq3l94YFDj03gNAA')}>
                          Copiar Link
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="https://forms.zohopublic.com/engenharia10qualityseg/form/qslibOSV210/formperma/2maAFvwKpusTxCGPwIOQ3RZzuvfc7MKnco0wax6s7eU" target="_blank"> Realizar OS </a></td>
                      <td><img src="https://imgur.com/xpdVMKe.png" alt="QR Code Placeholder" width="100" heith="100" /></td>
                      <td>
                        <button onClick={() => LinkToClipboard('https://forms.zohopublic.com/engenharia10qualityseg/form/qslibOSV210/formperma/2maAFvwKpusTxCGPwIOQ3RZzuvfc7MKnco0wax6s7eU')}>
                          Copiar Link
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="https://forms.zohopublic.com/vendas61/form/PREENCHIMENTOCHECKLISTPARAABERTURADECATS2210/formperma/G-YBBYanBv3bWzUDeCWveTNYVBWSqCeILuISBllwQOE" target="_blank"> CAT </a></td>
                      <td><img src="https://imgur.com/qW8NED8.png" alt="QR Code Placeholder" width="100" heith="100" /></td>
                      <td>
                        <button onClick={() => LinkToClipboard('https://forms.zohopublic.com/vendas61/form/PREENCHIMENTOCHECKLISTPARAABERTURADECATS2210/formperma/G-YBBYanBv3bWzUDeCWveTNYVBWSqCeILuISBllwQOE')}>
                          Copiar Link
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="https://forms.zohopublic.com/vendas61/form/DadosparaelaboraodosprogramasPRGPCMSO/formperma/24-A-_EX6D2TSTbuLRlJUv6AYv6VQHVTlSaDO2ESPrw" target="_blank"> PGR PCMSO </a></td>
                      <td><img src="https://imgur.com/BURDlHC.png" alt="QR Code Placeholder" width="100" heith="100" /></td>
                      <td>
                        <button onClick={() => LinkToClipboard('https://forms.zohopublic.com/vendas61/form/DadosparaelaboraodosprogramasPRGPCMSO/formperma/24-A-_EX6D2TSTbuLRlJUv6AYv6VQHVTlSaDO2ESPrw')}>
                          Copiar Link
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="https://forms.zohopublic.com/esocial/form/EnviodoESocial/formperma/FuLjyXmuFRHA9dcUFtBFaXAlTkpSTmUW6AJiuI8c9mc" target="_blank"> E-Social </a></td>
                      <td><img src="https://imgur.com/jtkla5i.png" alt="QR Code Placeholder" width="100" heith="100" /></td>
                      <td>
                        <button onClick={() => LinkToClipboard('https://forms.zohopublic.com/esocial/form/EnviodoESocial/formperma/FuLjyXmuFRHA9dcUFtBFaXAlTkpSTmUW6AJiuI8c9mc')}>
                          Copiar Link
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="https://forms.zohopublic.com/juliana15/form/PPPPerfilProfissiogrficoPrevidencirio/formperma/hm4WW-EyrnN31vW7pD1xOheJkBnz36rN15rYgSR_4-0" target="_blank"> PPP </a></td>
                      <td><img src="https://imgur.com/bVPPHg0.png" alt="QR Code Placeholder" width="100" heith="100" /></td>
                      <td>
                        <button onClick={() => LinkToClipboard('https://forms.zohopublic.com/juliana15/form/PPPPerfilProfissiogrficoPrevidencirio/formperma/hm4WW-EyrnN31vW7pD1xOheJkBnz36rN15rYgSR_4-0')}>
                          Copiar Link
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
