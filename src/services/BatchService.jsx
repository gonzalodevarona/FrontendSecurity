import axios from "../config/axios";
import { authHeader } from "./AuthService";



export async function getAllBatches(){

  try {
    const result = await axios.get('/batch', {headers: authHeader()});

    // Evaluar si es status code 200
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
    return null;
  }

}

export async function getBatchById(id){

    try {
      const result = await axios.get(`/batch/${id}`, {headers: authHeader()});
  
      // Evaluar si es status code 200
      if (result.status === 200) {
        return result.data;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  
  }

export async function createBatch(newBatch){

  try {
    const result = await axios.post('/batch', {headers: authHeader()}, newBatch);

    // Evaluar si es status code 200
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
    return error.response.data;
  }

}
