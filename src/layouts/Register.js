import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from './Register.module.css';
import UserTable from './UserTable';

const Register = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioForm, setUsuarioForm] = useState({usuario: '', nome: '', email: '', senha: '', unidade: '', setor: '', acesso: ''});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const response = await axios.get('https://weak-erin-bighorn-sheep-gear.cyclic.app/users');
      console.log(response.data); // Verifique o formato dos dados aqui
      setUsuarios(Array.isArray(response.data.users) ? response.data.users : []);
    };
  
    fetchUsuarios();
  }, []);

  const handleInputChange = e => {
    setUsuarioForm({
      ...usuarioForm,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('https://weak-erin-bighorn-sheep-gear.cyclic.app/register', usuarioForm);

      if (response.data.success) {
        setUsuarios([...usuarios, response.data.usuario]);
        setUsuarioForm({usuario: '', nome: '', email: '', senha: '', unidade: '', setor: '', acesso: ''});
      } else {
        alert('Registro falhou');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.content}>
          <div className={styles.title}>
            PAINEL | CONNECT
          </div>
          

          <form onSubmit={handleRegister} className={styles.form}>
            <input name="usuario" type="text" value={usuarioForm.usuario} onChange={handleInputChange} placeholder="Usuário" className={styles.input}/>
            <input name="nome" type="text" value={usuarioForm.nome} onChange={handleInputChange} placeholder="Nome" className={styles.input}/>
            <input name="email" type="text" value={usuarioForm.email} onChange={handleInputChange} placeholder="Email" className={styles.input}/>
            <input name="senha" type="password" value={usuarioForm.senha} onChange={handleInputChange} placeholder="Senha" className={styles.input}/>
            <input name="unidade" type="text" value={usuarioForm.unidade} onChange={handleInputChange} placeholder="Unidade" className={styles.input}/>
            <input name="setor" type="text" value={usuarioForm.setor} onChange={handleInputChange} placeholder="Setor" className={styles.input}/>
            <input name="acesso" type="text" value={usuarioForm.acesso} onChange={handleInputChange} placeholder="Acesso" className={styles.input}/>
            <button type="submit" className={styles.button}>
             Cadastrar
            </button>
          </form>
        </div>
      </div>
      <div className={styles.rightSide}>
        <UserTable usuarios={usuarios} setUsuarios={setUsuarios} />
      </div>
    </div>
  );
};

export default Register;
