import LoginService from '../services/LoginService';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RouterLink } from "react-router-dom";
import Swal from 'sweetalert2'
import { useContext } from "react";
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';



export default function SignIn() {

  const { user, updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    if(username.length < 8 && password.length < 8 ){
      Swal.fire({title:'Error: your username or password is too short', timer: 2500})
    } else{
      const result = await LoginService(data.get('username'), data.get('password'));
      
      updateUser(result);
      
      if(result !== null){
        if(result.type === 'ADMIN'){
          navigate('/admin');
        }else{
          navigate('/user');
        }
      } else{
        Swal.fire({title:'Error: wrong credentials', timer: 2500})
      }
    }
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
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              type="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
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

          </Box>
        </Box>
      </Container>
    
  );
}