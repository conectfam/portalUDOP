import React, { useEffect } from "react";  // Acrescentamos o useEffect
import { Badge, Button, Navbar, Nav, Container } from "react-bootstrap";

// Adicionamos a função logoutUser 
const logoutUser = () => {
  console.log("Usuário foi deslogado devido à inatividade");
  localStorage.removeItem('token');
  window.location.href = '/login';
}

const YourComponent = () => {
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
  // Fim da adição do código de inatividade

  return (
    <Container>
      {/* Seu conteúdo existente */}
      
      {/* Embed do GitMind */}
      <iframe
        src="https://app.powerbi.com/view?r=eyJrIjoiNTQ1OTMzNGUtYWMzZC00ZWIxLWFmN2YtZDdlZWY4MzU1OTVkIiwidCI6ImMxNTk2NDVkLTM3ZjUtNDg5Ny1hNTQ5LTNhZDIzMDkyZTdjNyJ9"
        title="GitMind Embed"
        width="100%"
        height="600px"
        frameborder="0"
        scrolling="auto"
        allowfullscreen
      ></iframe>
      
      {/* Seu conteúdo existente */}
    </Container>
  );
};

export default YourComponent;


