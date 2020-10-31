import { axiosWithAuth } from '../utils/axiosWithAuth';

export const addFriend = (friend) => {
    return axiosWithAuth().post('http://localhost:5000/api/friends', friend);
};