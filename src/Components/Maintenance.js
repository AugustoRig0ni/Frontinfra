
import React, { useState } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";

function Maintenance() {
	const [maintenance, setMaintenance] = useState({
		date: "",
		time: "",
		technician: "",
		estimated: ""
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setMaintenance({ ...maintenance, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<Container className="mt-5" style={{ maxWidth: "500px", background: "rgba(255,255,255,0.8)", borderRadius: "15px", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
			<h3>Registro de Manutenção</h3>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Data</Form.Label>
					<Form.Control type="date" name="date" value={maintenance.date} onChange={handleChange} required />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Horário</Form.Label>
					<Form.Control type="time" name="time" value={maintenance.time} onChange={handleChange} required />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Técnico Responsável</Form.Label>
					<Form.Control type="text" name="technician" value={maintenance.technician} onChange={handleChange} required placeholder="Nome do técnico" />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Tempo estimado para conclusão (em horas)</Form.Label>
					<Form.Control type="number" name="estimated" value={maintenance.estimated} onChange={handleChange} required min="1" placeholder="Ex: 2" />
				</Form.Group>
				<Button variant="primary" type="submit" style={{
                    background:'#3c9150ff',
                    border:'gray',
                }}>Registrar</Button>
			</Form>

			{submitted && (
				<div className="mt-4">
					<h5>Detalhes da Manutenção</h5>
					<Table bordered>
						<tbody>
							<tr>
								<td>Data</td>
								<td>{maintenance.date}</td>
							</tr>
							<tr>
								<td>Horário</td>
								<td>{maintenance.time}</td>
							</tr>
							<tr>
								<td>Técnico</td>
								<td>{maintenance.technician}</td>
							</tr>
							<tr>
								<td>Tempo para ficar pronto</td>
								<td>{maintenance.estimated} hora(s)</td>
							</tr>
						</tbody>
					</Table>
				</div>
			)}
		</Container>
	);
}

export default Maintenance;


