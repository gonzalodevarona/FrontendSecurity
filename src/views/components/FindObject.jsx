import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';


function FindObject({name, action}) {

    const [foundObject, setFoundObject] = useState({});

    const handleSubmit = async (event) => {
        const user = JSON.parse(localStorage.getItem('user'));
    
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        //const response = await createSupplyChainUser(newUser);
    
        
        
        const response = await action(data.get('id'))
        setFoundObject(response)
        console.log(response);
        // if (response.data.accessToken) {
        //   localStorage.setItem("user", JSON.stringify(response.data));
        // }
    

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
                <SearchIcon/>
            </Avatar>
            <Typography fontWeight= 'bold' component="h1" variant="h5" >
                Busca {name} por su ID
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt:3}}>
            
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="id"
                    label={`ID ${name}`}
                    name="id"
                    
                />

                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, maxWidth:'50%' }}
                >
                    Buscar {name}
                </Button>
                {Object.keys(foundObject).length === 0 ? null:
                    <Box>
                        <Divider sx={{m:4}}/>

                        <Typography fontWeight= 'bold' component="h1" variant="h5" >
                            Resultados
                        </Typography>
                        <Box sx={{m:2}}>
                            {Object.entries(foundObject).map(([key, value]) => (
                                <div key={key}>
                                <Typography variant="body1">
                                    <strong>{key}:</strong> {value}
                                </Typography>
                                </div>
                            ))}
                        </Box>
                    </Box>
                }
            </Box>
        </Box>
    </Container>
    )
}

export default FindObject