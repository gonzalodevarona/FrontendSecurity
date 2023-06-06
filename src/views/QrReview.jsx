import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getBatchById } from '../services/BatchService';
import { getUpdatesByBatchId } from '../services/UpdateService';
import { useParams } from 'react-router-dom';
import { Divider } from '@mui/material';

function QrReview() {

    const { batchId } = useParams();

    const [foundBatch, setFoundBatch] = useState({});
    const [foundUpdates, setFoundUpdates] = useState([]);

    useEffect(() => {
        const fetchBatch = async () => {
          try {
            const response = await getBatchById(batchId);
    
            console.log(response);
            setFoundBatch(response);
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchBatch();

        const fetchUpdates = async () => {
          try {
            const response = await getUpdatesByBatchId(batchId);
    
            console.log(response);
            setFoundUpdates(response);
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchUpdates();
      }, []);

    const renderObject = (object) => {
      return(
        <Box sx={{m:5}}>
          {Object.entries(object).map(([key, value]) => (
              <div key={key}>
              <Typography variant="body1">
                  <strong>{key}:</strong> {value}
              </Typography>
              </div>
          ))}
        </Box>
      );
    }

    return (

    <Box sx={{m:2, mt:10}}>
        <Typography color='#e82426' fontWeight= 'bold' component="h1" variant="h5" >
            Información del Lote
        </Typography>

        {renderObject(foundBatch)}
        
        <Typography sx={{m:2}} color='#e82426' fontWeight= 'bold' component="h1" variant="h5" >
            Actualizaciones del Lote
        </Typography>

        {foundUpdates && foundUpdates.length > 0 ? foundUpdates.map((update) => (
             <Box>
              <Divider/>
              {renderObject(update)}
             </Box>
          ))
        : null}
    </Box>
    )
}

export default QrReview;