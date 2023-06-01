import axios from "../config/axios";


export async function changePassword(id, password) {

  try {
    const result = await axios.put(`/user/${id}/change-password`, {password: password});

    // Evaluar si es status code 200
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
    return error.response.data;
  }

}
