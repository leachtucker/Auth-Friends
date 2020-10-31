import React, { useEffect, useState } from 'react';
import { getFriends } from '../api/getFriends';
import FriendsList from './FriendsList';
import FriendForm from './FriendForm';
import ReactLoading from 'react-loading';

import { UserContext } from '../context/UserContext';

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
        <UserContext.Provider value={{friends, setFriends}}>
            <div className="box">
                <div className="has-text-centered box-header">
                    <h2 className="title is-4">Dashboard</h2>
                </div>
                <div className="has-text-centered">
                        <h2 className="title is-5">Your Friends</h2>
                    </div>
                <div className="friends-container">
                    {friends &&
                        <FriendsList friends={friends} />
                    }
                    {!friends &&
                        <ReactLoading type={'bubbles'} color={'black'} height={150} width={100} />
                    }
                </div>
                <FriendForm />
            </div>
        </UserContext.Provider>
    );
};

export default Dashboard;