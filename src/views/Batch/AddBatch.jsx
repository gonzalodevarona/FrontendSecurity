import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InventoryIcon from '@mui/icons-material/Inventory';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { authGetId } from '../../services/AuthService';
import dayjs from 'dayjs';

import { useNavigate } from 'react-router-dom';



export default function AddBatch() {
  const navigate = useNavigate();

  const [dateProduced, setDateProduced] = useState(dayjs());

  const handleSubmit = async (event) => {
    const user = JSON.parse(localStorage.getItem('user'));

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newBatch = {
      productName: data.get('productName'),
      producerName: data.get('producerName'),
      isColdStorage: data.get('isColdStorage'),
      dateProduced: dateProduced,
      whoAddIt: authGetId()
    }
    
    //const response = await createSupplyChainUser(newUser);

    console.log(newBatch);

    // if (response.data.accessToken) {
    //   localStorage.setItem("user", JSON.stringify(response.data));
    // }

    navigate('/');
  };


  return (
    
      <Container component="main" maxWidth="s">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <InventoryIcon />
          </Avatar>
          <Typography fontWeight= 'bold' component="h1" variant="h5" >
            Agrega un lote al servicio de seguimiento de Almacenes Triunfo
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="productName"
              label="Nombre del productor"
              name="productName"
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="producerName"
              label="Nombre del producto"
              name="producerName"
              
            />
            <LocalizationProvider name="dateProduced" dateAdapter={AdapterDayjs}>
              <DemoContainer margin="normal"
              required
              fullWidth 
              name="dateProduced"
              value={dateProduced}
              onChange={(newValue) => setDateProduced(newValue)}
              components={['DatePicker']}>
                <DatePicker  disableFuture={true} name="dateProduced" label="Fecha en que finalizó producción" />
              </DemoContainer>
            </LocalizationProvider>

            <Box>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">¿Necesita cadena de frio?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="isColdStorage"
                  defaultValue={false}
                >
                  <FormControlLabel value={true} control={<Radio />} label="Si" />
                  <FormControlLabel value={false} control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Box>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, maxWidth:'50%' }}
            >
              Agregar lote
            </Button>
            
          </Box>
        </Box>
      </Container>
    
  );
}