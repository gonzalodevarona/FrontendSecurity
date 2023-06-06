import * as React from 'react';
import { useEffect } from 'react';
import Card from "./components/Card"
import { Box } from '@mui/material';
import BoxesImage from '../../assets/boxes.jpg';
import BoxImage from '../../assets/box.jpg';
import UpdateImage from '../../assets/update.jpg';
import BlockchainImage from '../../assets/blockchain.jpg';
import AllBoxesImage from '../../assets/allBoxes.jpg';
import ReportsImage from '../../assets/reports.jpg';
import { useNavigate } from 'react-router-dom';
import { authHeader } from '../../services/AuthService';

function Home() {

  useEffect(() => {
    console.log(authHeader())
  }, []);
  
  const navigate = useNavigate();
  
  const redirect = (route) => {
    navigate(`/${route}`);
  };

  return (
    <Box sx={{display:"flex", gap:5, flexDirection: {xs:"column", md:"row"}, alignItem:"center",justifyContent: "spaceBetween",flexWrap:'wrap', m:5}}>
      <Card imgUrl={AllBoxesImage} title={"Mostrar todos los Lotes"} action={()=> redirect("allbatches")} />
      <Card imgUrl={BoxImage} title={"Buscar Lote"} action={()=> redirect("findbatch")} />
      <Card imgUrl={BoxesImage} title={"Agregar Lote"} action={()=> redirect("addbatch")} />
      <Card imgUrl={ReportsImage} title={"Mostrar todas las novedades"} action={()=> redirect("allupdates")} />
      <Card imgUrl={BlockchainImage} title={"Buscar Novedad"} action={()=> redirect("findupdate")} />
      <Card imgUrl={UpdateImage} title={"Agregar Novedad"} action={()=> redirect("addupdate")} />
      
      
    </Box>
  );
}

export default Home