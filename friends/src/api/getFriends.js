import { axiosWithAuth } from '../utils/axiosWithAuth';

export const getFriends = () => {
    return axiosWithAuth().get('http://localhost:5000/api/friends');
}