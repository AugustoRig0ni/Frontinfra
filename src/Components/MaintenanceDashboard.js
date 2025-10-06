import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Table, Button, Modal, Form } from "react-bootstrap";

function MaintenanceDashboard({ addMaintenance, maintenances, deleteMaintenance }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    technician: "",
    problem: "",
    estimated: "",
    entryDate: "",
    exitDate: "",
    owner: "" 
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    addMaintenance(form);
    setForm({
      technician: "",
      problem: "",
      estimated: "",
      entryDate: "",
      exitDate: "",
      owner: ""
    });
    setShowModal(false);
  };

  return (
    <Container className="mt-5" style={{ 
      background: "rgba(255,255,255,0.8)", 
      borderRadius: "15px", 
      boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
       padding: "20px" }}>

      <h3>Dashboard de Manutenções</h3>

      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        marginBottom: 16 }}>

        <Button style={{
          background:'#3c9150ff',
          border:'none' 
          }} onClick={() => setShowModal(true)}>
          Adicionar Manutenção
        </Button>

        <Button variant="secondary" onClick={() => navigate('/dashboard')}>
          Voltar
        </Button>

      </div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome do Técnico</th>
            <th>Problema</th>
            <th>Data de Entrada</th>
            <th>Previsão de Saída</th>
            <th>Proprietário</th>
          </tr>
        </thead>
        <tbody>
          {maintenances && maintenances.map((m) => (
            <tr key={m.id}>
              <td>{m.technician}</td>
              <td>{m.problem}</td>
              <td>{m.entryDate}</td>
              <td>{m.exitDate}</td>
              <td>{m.owner}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => deleteMaintenance(m.id)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Manutenção</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome do Técnico</Form.Label>
              <Form.Control type="text" name="technician" value={form.technician} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Problema</Form.Label>
              <Form.Control type="text" name="problem" value={form.problem} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tempo para ficar pronto (em horas)</Form.Label>
              <Form.Control type="number" name="estimated" value={form.estimated} onChange={handleChange} required min="1" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data de Entrada</Form.Label>
              <Form.Control type="date" name="entryDate" value={form.entryDate} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Previsão de Saída</Form.Label>
              <Form.Control type="date" name="exitDate" value={form.exitDate} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Proprietário do Celular</Form.Label>
              <Form.Control type="text" name="owner" value={form.owner} onChange={handleChange} required />
            </Form.Group>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button variant="primary" type="submit">Registrar</Button>
              <Button variant="secondary" type="button" onClick={() => setShowModal(false)}>Cancelar</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default MaintenanceDashboard;
