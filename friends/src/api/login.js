import axios from 'axios';

export const login = (userCredentials) => {
    return axios.post('http://localhost:5000/api/login', userCredentials)
        .then(resp => {
            localStorage.setItem('token', resp.data.token);
            console.log(resp.data.token);
            // Push user to the route they were navigating to OR push them to the dashboard
        })
        .catch(err => {
            console.err(err.response.message);
        });
};