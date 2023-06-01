import axios from "../config/axios";



export default async function login(username, password){

  try {
    const result = await axios.post('/login', {username: username, password: password});

    // Evaluar si es status code 200
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
    return null;
  }

}


  
