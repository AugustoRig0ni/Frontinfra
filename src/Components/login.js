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
      backgroundColor: 'rgba(248, 248, 248, 1)', 
      boxShadow:'0 0 30px rgba(226, 228, 224, 0.95)',
      color:'gray',
      borderRadius:'12px',
      borderColor:'black'
      }}>
      <h3 style={
        {color:'black', 
        fontSize:'20px', 
        fontFamily:'sans-serif'
        }}>Login</h3>

      <p style={{
        fontSize:'14px', 
        fontWeight:'400'
        }}>Entre com suas credenciais para ter acesso ao estoque</p>

    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formUsername" className="mb-3">
    <Form.Label style={{
        fontSize:'12px',
        fontWeight:'400',
        color:'black' 
        }}>Usuário</Form.Label>

    <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} required 
    style={{
          }} />
        </Form.Group>

    <Form.Group controlId="formPassword" className="mb-3">
    <Form.Label style={{fontSize:'12px', fontWeight:'400', color:'black'}}>Senha</Form.Label>
    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    </Form.Group>
    <Button className="Enter" style= {{
        background:'#3c9150ff',
        border:'gray',
        fontWeight:'500',
        fontSize:'12px',
        maxWidth:'380px',
        width:'100%',
        borderRadius:'6px'}}
        variant="primary" type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}

export default Login;
