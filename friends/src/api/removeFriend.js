import { axiosWithAuth } from '../utils/axiosWithAuth';

export const removeFriend = (id) => {
    return axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`);
};