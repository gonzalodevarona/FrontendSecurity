import { Typography, Container } from '@mui/material';

function Footer() {
    return (
        <footer>
          <Container maxWidth="md" sx={{mt:5, mb:2}}>
            <Typography variant="body2" align="center">
                Almacenes Triunfo - IT Consulting © 2023
            </Typography>
          </Container>
        </footer>
    );
}

export default Footer