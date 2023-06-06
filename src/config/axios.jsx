import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://ec2-54-86-66-164.compute-1.amazonaws.com:3000/api/'
});

export default instance;