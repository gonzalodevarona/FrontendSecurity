import { login } from '../services/AuthService';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { setUser } from '../services/AuthService';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';



export default function SignIn() {


  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    if(email.length < 8 && password.length < 8 ){
      Swal.fire({title:'Error: your email or password is too short', timer: 2500})
    } else{

      const result = await login(data.get('email'), data.get('password'));
      console.log(result);
      
      
      if(result !== null) {
        
        const store = {token: result.token, id: result.user._id, name: result.user.name}
        console.log(store);
        setUser(store);
        navigate('/');
        window.location.reload(false);
      } else{
        Swal.fire({title:'Error: no hay un usuario con estas credenciales', timer: 2900})
      }
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };


  return (
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión en servicio de seguimiento de Almacenes Triunfo
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              type="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Box
              sx={{
                display: 'flex',
                justifyContent: "flex-end ",
                alignItems: "center",
                gap:2,
                mt:5
              }}
            >
              <Box>¿No tienes cuenta?</Box>
              <Button onClick={handleSignUp} variant="outlined">Crear cuenta</Button>
            </Box>

          </Box>
        </Box>
      </Container>
    
  );
}