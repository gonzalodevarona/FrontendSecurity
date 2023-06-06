import axios from "../config/axios";
import { authHeader } from "./AuthService"



export async function getAllUpdates(){

  try {
    const result = await axios.get('/update', {headers: authHeader()});

    // Evaluar si es status code 200
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
    return null;
  }

}

export async function getUpdateById(id){
  try {
    const result = await axios.get(`/update/${id}`, {headers: authHeader()});

    // Evaluar si es status code 200
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
  
}

export async function getUpdatesByBatchId(batchId){
  try {
    const result = await axios.get(`/updates/${batchId}`, {headers: authHeader()});

    // Evaluar si es status code 200
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
  
}

export async function createUpdate(newUpdate){

  try {
    const result = await axios.post('/update', {headers: authHeader()}, newUpdate);

    // Evaluar si es status code 200
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
    return error.response.data;
  }

}
