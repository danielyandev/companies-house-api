import axios from "axios";

export async function login(data){
    return await axios.post('/api/login', data)
}

export async function register(data){
    return await axios.post('/api/register', data)
}

export async function getUser(){
    return await axios.get('/api/user')
}

export async function logout(){
    return await axios.post('/api/logout')
}

export async function refreshToken(refresh_token){
    return await axios.post('/api/refresh', {refresh_token})
}
