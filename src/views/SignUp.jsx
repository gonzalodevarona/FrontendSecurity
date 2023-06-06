import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createSupplyChainUser } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';




export default function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const idTypes = [
    {
      value: 'CC',
      label: 'CC',
    },
    {
      value: 'CE',
      label: 'CE',
    }
  ];


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      name: data.get('name'),
      lastName: data.get('lastName'),
      contactNumber: data.get('contactNumber'),
      role: data.get('role'),
      nameEnterprise: data.get('nameEnterprise'),
      idType: data.get('idType'),
      id: data.get('id'),
      email: data.get('email'),
      password: data.get('password')
    }
    
    const response = await createSupplyChainUser(newUser);

    console.log(response);

    // if (response.data.accessToken) {
    //   localStorage.setItem("user", JSON.stringify(response.data));
    // }

    navigate('/admin');
  };

  const handleSignOut = () => {
    updateUser(null);
  }

  const handleSignIn = () => {
    navigate('/login');
  };


  return (
    
      <Container component="main" maxWidth="s">
        <Box
            sx={{
              display: 'flex',
              justifyContent: "flex-end ",
              alignItems: "center",
              gap:2,
              mt:5
            }}
          >
            <Box>¿Ya tienes cuenta?</Box>
            <Button onClick={handleSignIn} variant="outlined">Iniciar sesión</Button>
          </Box>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonIcon />
          </Avatar>
          <Typography fontWeight= 'bold' component="h1" variant="h5" >
            Registrate para usar los servicios de seguimiento de Almacenes Triunfo
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
            />
            <Box sx={{display:'flex', gap:2}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nombres"
                name="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Apellidos"
                name="lastName"
              />
            </Box>
            <TextField
              margin="normal"
              required
              fullWidth
              type="number"
              id="contactNumber"
              label="Número de contacto"
              name="contactNumber"
            />
            <Box sx={{display:'flex', gap:2}}>
              <TextField
                margin="normal"
                required
                select
                fullWidth
                id="idType"
                defaultValue="CC"
                label="Tipo de documento"
                name="idType"
              >
                {idTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                type="number"
                id="id"
                label="Número de documento"
                name="id"
              />
            </Box>
            <TextField
              margin="normal"
              required
              fullWidth
              type="nameEnterprise"
              label="Nombre de la empresa"
              name="nameEnterprise"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="role"
              label="Cargo"
              name="role"
            />
            
            <TextField
              type={showPassword ? 'text' : 'password'}
              margin="normal"
              required
              fullWidth
              name="password"
              id="password"
              autoComplete="current-password"
              label="Contraseña"
              // value={password}
              // onChange={handlePasswordChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, maxWidth:'50%' }}
            >
              Registrarte
            </Button>
            
          </Box>
        </Box>
      </Container>
    
  );
}