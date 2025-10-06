import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Table, Button, Modal } from 'react-bootstrap';
import ItemForm from './itemform';



function Dashboard() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, nome: 'HDs', quantidade: 17 },
    { id: 2, nome: 'Mouse', quantidade: 25 },
    { id: 3, nome: 'Teclado', quantidade: 23 },
    { id: 4, nome: 'Monitores', quantidade: 6 },
    { id: 5, nome: 'Macs', quantidade: 12 }

  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const handleAdd = (item) => {
    if (editingItem) {
      setItems(items.map(i => (i.id === item.id ? item : i)));
    } else {
      item.id = Date.now();
      setItems([...items, item]);
    }
    setShowModal(false);
    setEditingItem(null);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <Container className="mt-5" style={{ 
      backgroundColor: '1px solid rgba(255, 255, 255, 0.2)', 
      color: 'black',
      borderRadius:'15px',
      boxShadow:'0 8px 32px rgba(0, 0, 0, 0.4)',
      border:'border: 10 px solid rgba(255, 255, 255, 0.2);',
      padding:'20px'
      }}>

      <h3>Estoque de Infraestrutura</h3>
      <Button className="mb-3" style={{
        background: '#3c9150ff',
        border: 'none',
      }}
      onClick={() => setShowModal(true)}>Adicionar Item</Button>

      <Button className="mb-3 ms-2" style={{
        background: '#3c9150ff',
        border: 'none',
      }}
      onClick={() => navigate('/maintenance')}>Ir para Manutenção</Button>

      <Button className="mb-3 ms-2" style={{
        background: '#3c9150ff',
        border: 'none',
      }}
      onClick={() => navigate('/maintenance-dashboard')}>Histórico de Manutenções</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td>
                <Button size="sm" onClick={() => handleEdit(item)} className="me-2" style={{
                  background:'#3c9150ff',
                  border:'gray'
                  }}>Editar</Button>


                <Button size="sm" variant="danger" onClick={() => handleDelete(item.id)} style={{
                  background:'#5c636a',
                  border:'gray'
                  }}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

        <Button style= {{
          background: '#3c9150ff',
          border: 'none',
        }}
        variant="primary" onClick={() => {localStorage.removeItem('Token');
          window.location.href = ' ';}}>Sair</Button>

      <Modal show={showModal} onHide={() => { setShowModal(false); setEditingItem(null); }}>
        <Modal.Header closeButton>
          <Modal.Title>{editingItem ? 'Editar Item' : 'Adicionar Item'}</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
          <ItemForm onSave={handleAdd} item={editingItem} />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Dashboard;