import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import CustomTable from './CustomTable';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AssessmentIcon from '@mui/icons-material/Assessment';


function ShowAllObjects({name, action}) {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await action();
            
            setTableData(response);
            
          } catch (error) {
            setTableData(null);
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
                <AssessmentIcon/>
            </Avatar>
            <Typography fontWeight= 'bold' component="h1" variant="h5" sx={{mb:5 }} >
                {name == 'novedades'? "Todas las " : "Todos los "} {name} 
            </Typography>
            
            <CustomTable tableData={tableData}></CustomTable>
        </Box>
    </Container>
    )
}

export default ShowAllObjects