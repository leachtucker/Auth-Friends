import axios from 'axios';

export const login = (userCredentials) => {
    return axios.post('http://localhost:5000/api/login', userCredentials)
        .then(resp => {
            localStorage.setItem('token', resp.data.token);
        })
        .catch(err => {
            console.err(err.response.message);
        });
};