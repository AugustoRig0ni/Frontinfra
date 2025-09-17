import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';


function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'Admin') {
      onLogin();
    } else {
      alert(username === '' || password === '' ? 
        'Por favor, preencha todos os campos.' : 'Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <Container className="mt-5" style= {{ 
      maxWidth: '400px', 
      widht:'100%', 
      padding:'16px', 
      backgroundColor: 'rgba(0, 0, 0, 0.6)', 
      boxShadow:'0 0 30px rgba(0, 0, 0, 0.4)',
      color: 'white',
      borderRadius:'12px'
    }}>
      <h3>Login de acesso</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Usuário</Form.Label>
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} required style={{
            placeholder: 'Digite seu usuário',
          }} />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Button style= {{
          background: 'linear-gradient(45deg, gray, black)',
          border:'none'}}
          variant="primary" type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}

export default Login;
