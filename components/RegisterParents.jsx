import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const RegisterParent = () => {
  const [parent, setParent] = useState({
    name: '',
    lastName: '',
    login: '',
    password: '',
    email: '',
    phoneNumber: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/parents', parent);
      navigate('/');
    } catch (error) {
      console.error('Ошибка при регистрации родителя:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
          Регистрация родителя
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth name="name" label="Имя" value={parent.name} onChange={handleChange} margin="normal" />
          <TextField fullWidth name="lastName" label="Фамилия" value={parent.lastName} onChange={handleChange} margin="normal" />
          <TextField fullWidth name="login" label="Логин" value={parent.login} onChange={handleChange} margin="normal" />
          <TextField fullWidth name="password" label="Пароль" type="password" value={parent.password} onChange={handleChange} margin="normal" />
          <TextField fullWidth name="email" label="Email" value={parent.email} onChange={handleChange} margin="normal" />
          <TextField fullWidth name="phoneNumber" label="Номер телефона" value={parent.phoneNumber} onChange={handleChange} margin="normal" />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Зарегистрироваться
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterParent;
