import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
  } from '@mui/material'
  import React, { useEffect } from 'react';

  export default function CustomTable  ({tableData}) {



    return (
      <TableContainer 
        sx={{ 
          maxHeight: {xs: '400px', md:'400px'}, 
          maxWidth:{xs: "400px", sm: '500px' , md: '100%'}
          
        }} component={Paper}>
        <Table stickyHeader aria-label='simple table'>
          <TableHead>
            <TableRow>
              {tableData && tableData[0] !== null  ? 
              Object.entries(tableData[0] || {}).map(([key]) => (
                <TableCell align='center'>{key}</TableCell>
              )) : null }
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                {Object.values(row).map((value, index) => (
                  <TableCell key={index}>{value.toString()}</TableCell>
                ))}
                
                
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
  
  