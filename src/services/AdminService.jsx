import axios from "../config/axios";


export async function addUser(user){

  try {
    const result = await axios.post('/admin/addusers', user);

    // Evaluar si es status code 200
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
    return error.response.data;
  }

}

export async function deleteUser(id){

  try {
    const result = await axios.delete(`/admin/deleteuser/${id}`);

    // Evaluar si es status code 200
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
    return error.response.data;
  }

}

export async function blankUserPassword(id){

  try {
    const result = await axios.put(`/admin/users/${id}/reset-password`);

    // Evaluar si es status code 200
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
    return error.response.data;
  }

}

export async function getUsers(){

    try {
      const result = await axios.get('/admin/users');
  
      // Evaluar si es status code 200
      if (result.status === 200) {
        return result.data;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  
  }


  
