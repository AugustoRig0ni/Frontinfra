import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import api from "../services/api";

function ItemForm({ onSave, item }) {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [maintenances, setMaintenances] = useState([]);

  // Agora o hook está dentro do componente 👇
  useEffect(() => {
    api.get("/itemform")
      .then(res => setMaintenances(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (item) {
      setNome(item.nome);
      setQuantidade(item.quantidade);
    } else {
      setNome('');
      setQuantidade(0);
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: item?.id || Date.now(), nome, quantidade: Number(quantidade) });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nome do Item</Form.Label>
        <Form.Control
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Quantidade</Form.Label>
        <Form.Control
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          required
          min="0"
        />
      </Form.Group>

      <Button type="submit" variant="success">Salvar</Button>
    </Form>
  );
}

export default ItemForm;
