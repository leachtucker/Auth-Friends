import React, { useEffect, useState } from 'react';
import { getFriends } from '../api/getFriends';
import FriendsList from './FriendsList';

const Dashboard = () => {
    const [friends, setFriends] = useState();

    useEffect(() => {
        // On Mount
        getFriends()
            .then(resp => {
                setFriends(resp.data);
            })
            .catch(err => {
                console.log(err.response.messsage);
            });
    }, []);



    return (
        <div className="box">
            <div className="has-text-centered">
                <h2 className="title is-4">Dashboard</h2>
            </div>
            <div className="container friends-container">
                {friends &&
                    <FriendsList friends={friends} />
                }
            </div>
        </div>
    );
};

export default Dashboard;