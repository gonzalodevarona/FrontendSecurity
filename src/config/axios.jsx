import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://3.93.59.179:3000/api/'
});

export default instance;