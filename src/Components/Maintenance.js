import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Table } from "react-bootstrap";

function Maintenance({ addMaintenance, maintenances }) {
	const navigate = useNavigate();
	const [maintenance, setMaintenance] = useState({
		date: "",
		technician: "",
		owner: "",
		problem: "",
		entryDate: "",
		exitDate: ""
	});

	const handleChange = (e) => {
		setMaintenance({ ...maintenance, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addMaintenance(maintenance);
		setMaintenance({
			date: "",
			technician: "",
			owner: "",
			problem: "",
			entryDate: "",
			exitDate: ""
		});
	};

	return (
		<Container className="mt-5" style={{
			maxWidth: "700px",
			background: "rgba(255,255,255,0.8)",
			borderRadius: "15px",
			boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
		}}>
			<h3>Registro de Manutenção</h3>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Técnico Responsável</Form.Label>
					<Form.Control type="text" name="technician" value={maintenance.technician} onChange={handleChange} required placeholder="Nome do técnico" />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Proprietário</Form.Label>
					<Form.Control type="text" name="owner" value={maintenance.owner} onChange={handleChange} placeholder="Nome do proprietário" />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Problema</Form.Label>
					<Form.Control type="text" name="problem" value={maintenance.problem} onChange={handleChange} placeholder="Descreva o problema" />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Data de Entrada</Form.Label>
					<Form.Control type="date" name="entryDate" value={maintenance.entryDate} onChange={handleChange} />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Previsão de Saída</Form.Label>
					<Form.Control type="date" name="exitDate" value={maintenance.exitDate} onChange={handleChange} />
				</Form.Group>
				<div style={{ display: 'flex', gap: '12px' }}>
					<Button variant="primary" type="submit" style={{
						background:'#3c9150ff',
						border:'gray',
					}}>Registrar</Button>
					<Button variant="secondary" type="button" onClick={() => navigate('/dashboard')}>
						Voltar
					</Button>
				</div>
			</Form>

					{ maintenances && maintenances.length > 0 && (
						<div className="mt-4">
							<h5>Histórico de Manutenções</h5>
							<Table bordered>
								<thead>
									<tr>
										<th>Técnico</th>
										<th>Proprietário</th>
										<th>Problema</th>
										<th>Entrada</th>
										<th>Saída</th>
									</tr>
								</thead>
								<tbody>
									{maintenances.map((m) => (
										<tr key={m.id}>
											<td>{m.technician}</td>
											<td>{m.owner}</td>
											<td>{m.problem}</td>
											<td>{m.entryDate}</td>
											<td>{m.exitDate}</td>
										</tr>
									))}
								</tbody>
							</Table>
						</div>
					)}
		</Container>
	);
}

export default Maintenance;


