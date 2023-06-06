import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import Logo from "../assets/logo.png"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { authGetName, logout } from '../services/AuthService';

function Header() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
      navigate('/');
    };

    const handleLogout = () => {
      logout();
      navigate('/login');
    };

    return (
      <Box sx={{mb:5}}>
        <AppBar position="fixed">
          <Toolbar sx={{m: "auto"}}>
           
            <Box
                component="img"
                sx={{
                    height: 350,
                    width: 350,
                    maxHeight: { xs: 60, md: 70 },
                    maxWidth: { xs: 60, md: 70 },
                    m: 1,
                    flexGrow: 1 
                }}
                alt="Almacenes Triunfo Logo"
                src={Logo}
                onClick={handleLogoClick}
            />
             
          </Toolbar>
          
        </AppBar>
        {authGetName() !== "" &&
          <Box sx={{display:'flex', gap:2, mt:10, alignItems:'center'}}>
            <Typography>Hola {authGetName()}</Typography>
            <Button onClick={handleLogout} color='warning' variant="outlined">Cerrar sesión</Button>
          </Box>
        }
      </Box>
      );
}

export default Header