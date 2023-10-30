
import React, { useEffect } from "react";
import { Badge, Button, Navbar, Nav, Container } from "react-bootstrap";

const YourComponent = () => {
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
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('keydown', resetInactivityTimer);
    resetInactivityTimer();

    return () => {
      document.removeEventListener('mousemove', resetInactivityTimer);
      document.removeEventListener('keydown', resetInactivityTimer);
    }
  }, []);
  return (
    <Container>
      {/* Seu conteúdo existente */}
      
      {/* Embed do GitMind */}
      <iframe
        src="https://gitmind.com/app/docs/mk4nw5k6"
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


