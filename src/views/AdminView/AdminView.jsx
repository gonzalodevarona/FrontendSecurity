import React from 'react'
import { useState, useEffect, useContext } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CustomTable from './components/CustomTable';
import { getUsers } from '../../services/AdminService';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';


function AdminView() {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const [tableData, setTableData] = useState([]);
  const [updateTableSwitch, setUpdateTableSwitch] = useState(false);

  const headers = ["ID",
    "Username",
    "Password",
    "Last Login Date",
    "Type",
    "Salt","Erase password","Delete user"]

    useEffect(() => {
      // declare the async data fetching function
      const fetchData = async () => {
        // get the data from the api
        const data = await getUsers();
        
        setTableData(data);
      }
    
      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);
    }, [updateTableSwitch])

    const handleClick = () => {
      navigate('/signup');
    }

  return (
    <Box sx={{my:"auto" }}>
        <Box sx={{paddingBottom:3 }}>Hello Admin {user.username}</Box>
        <CustomTable updateTableSwitch={updateTableSwitch} setUpdateTableSwitch={setUpdateTableSwitch} headers={headers} tableData={tableData}></CustomTable>
        <Button sx={{mt:3 }} onClick={handleClick} variant="contained">Add new user </Button>
    </Box>
  )
}

export default AdminView