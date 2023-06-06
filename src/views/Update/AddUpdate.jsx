import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { getAllBatches } from "../../services/BatchService";
import { authGetId } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';



export default function AddUpdate() {
  const navigate = useNavigate();

  const [date, setDate] = useState(dayjs().subtract(1, 'day'));
  const [batches, setBatches] = useState([]);
  const [batchId, setBatchId] = useState("");


  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUpdate = {
      date: date,
      description: data.get('description'),
      batchId: data.get('batchId'),
      supplyChainUserId: authGetId()
    }
    
    //const response = await createSupplyChainUser(newUser);

    console.log(newUpdate);

    // if (response.data.accessToken) {
    //   localStorage.setItem("user", JSON.stringify(response.data));
    // }

    navigate('/');
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBatches();
        const batches = response.map((batch) => (
          batch._id
        ));

        console.log(batches);
        setBatches(batches);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
            <FeedbackIcon />
          </Avatar>
          <Typography fontWeight= 'bold' component="h1" variant="h5" >
            Agrega una novedad a un lote de la cadena de producción
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt:3}}>
            
            <TextField
              id="batchId"
              required
              fullWidth 
              name="batchId"
              select
              label="ID del lote"
              defaultValue={batches[0] || ""}
              helperText="ID del lote"
              value={batchId}
              onChange={(event) => {
                setBatchId(event.target.value);
              }}
            >
              {batches.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <LocalizationProvider name="date" dateAdapter={AdapterDayjs}>
              <DemoContainer margin="normal"
              required
              fullWidth 
              name="date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              components={['DatePicker']}>
                <DatePicker  disableFuture={true} name="date" label="Fecha de la novedad" />
              </DemoContainer>
            </LocalizationProvider>

            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="Descripción"
              name="description"
              
            />

            
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, maxWidth:'50%' }}
            >
              Agregar novedad
            </Button>
            
          </Box>
        </Box>
      </Container>
    
  );
}