import React, { useState } from 'react';
import { Container, Table, Button, Modal } from 'react-bootstrap';
import ItemForm from './itemform';



function Dashboard() {
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
      backgroundColor: 'rgba(204, 204, 204, 0.6)', 
      boxShadow:'0 0 30px rgba(204, 204, 204, 0.4)',
      color: 'black',
      borderRadius:'6px'
    }}>

      <h3>Estoque de Infraestrutura</h3>
      <Button className="mb-3" style={{
      background: 'linear-gradient(45deg, gray, black)',
      border:'none',
      }} 
      onClick={() => setShowModal(true)}>Adicionar Item</Button>
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
                <Button size="sm" onClick={() => handleEdit(item)} className="me-2">Editar</Button>
                <Button size="sm" variant="danger" onClick={() => handleDelete(item.id)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

        <Button style= {{
          background: 'linear-gradient(45deg, gray, black)',
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