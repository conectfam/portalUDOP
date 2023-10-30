import React, { useState } from 'react';
import axios from 'axios';
import styles from './UserTable.module.css';

const UserTable = ({ usuarios, setUsuarios }) => {
  const [editingIndex, setEditingIndex] = useState(-1);
  const [usuarioForm, setUsuarioForm] = useState({});

  const handleInputChange = e => {
    setUsuarioForm({
      ...usuarioForm,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = (usuario, index) => {
    setEditingIndex(index);
    setUsuarioForm(usuario);
  };

  const handleSave = async index => {
    try {
      const response = await axios.put(`https://weak-erin-bighorn-sheep-gear.cyclic.app/users/${usuarioForm.id}`, usuarioForm);

      if (response.data.success) {
        const updatedUsuarios = [...usuarios];
        updatedUsuarios[index] = usuarioForm;
        setUsuarios(updatedUsuarios);
        setEditingIndex(-1);
      } else {
        alert('Atualização falhou');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async id => {
    try {
      const response = await axios.delete(`https://weak-erin-bighorn-sheep-gear.cyclic.app/users/${id}`);

      if (response.data.success) {
        const updatedUsuarios = usuarios.filter(usuario => usuario.id !== id);
        setUsuarios(updatedUsuarios);
      } else {
        alert('Exclusão falhou');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Usuário</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Senha</th>
          <th>Unidade</th>
          <th>Setor</th>
          <th>Acesso</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario, index) => (
          <tr key={usuario.id}>
            {editingIndex === index ? (
              <>
                {/* Código de edição */}
                <td><input name="usuario" type="text" value={usuarioForm.usuario} onChange={handleInputChange} /></td>
                <td><input name="nome" type="text" value={usuarioForm.nome} onChange={handleInputChange} /></td>
                <td><input name="email" type="text" value={usuarioForm.email} onChange={handleInputChange} /></td>
                <td><input name="senha" type="password" value={usuarioForm.senha} onChange={handleInputChange} /></td>
                <td><input name="unidade" type="text" value={usuarioForm.unidade} onChange={handleInputChange} /></td>
                <td><input name="setor" type="text" value={usuarioForm.setor} onChange={handleInputChange} /></td>
                <td><input name="acesso" type="text" value={usuarioForm.acesso} onChange={handleInputChange} /></td>
                <td>
                  <button className={styles.saveButton} onClick={() => handleSave(index)}>Salvar</button>
                  <button className={styles.cancelButton} onClick={() => setEditingIndex(-1)}>Cancelar</button>
                  {index === editingIndex && (
                    <button className={styles.editButton} onClick={() => handleDelete(usuario.id)}>Deletar</button>
                  )}
                </td>
              </>
            ) : (
              <>
                <td>{usuario.usuario}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>{usuario.senha}</td>
                <td>{usuario.unidade}</td>
                <td>{usuario.setor}</td>
                <td>{usuario.acesso}</td>
                <td>
                  <button className={styles.editButton} onClick={() => handleEdit(usuario, index)}>Editar</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
