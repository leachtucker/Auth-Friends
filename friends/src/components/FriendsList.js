import React from 'react';
import Friend from './Friend';

const FriendsList = (props) => {
    return (
        <>
            {
                props.friends.map(person => {
                    return (<Friend key={person.id} person={person} />);
                })
            }
        </>
    );
};

export default FriendsList;