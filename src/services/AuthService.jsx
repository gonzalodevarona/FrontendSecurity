import axios from "../config/axios";



export async function login(email, password){

  try {
    const result = await axios.post('/login', {email: email, password: password});

    // Evaluar si es status code 200
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    //console.log(error);
    return null;
  }

}

export async function createSupplyChainUser(user){

  try {
    const result = await axios.post('/register', user);

    // Evaluar si es status code 200
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
    return error.response.data;
  }

}

export function logout() {
  localStorage.clear();
  window.location.reload(false);
}

export function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}

export function authGetName() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.name) {
    return user.name;
  } else {
    return "";
  }
}

export function authUserLoggedIn() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  if (user) {
    return true;
  } else {
    return false;
  }
}


export function authGetId() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.id) {
    return user.id;
  } else {
    return "";
  }
}

export function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));

}


  
