import React, { useContext } from 'react';
import { removeFriend } from '../api/removeFriend';
import { UserContext } from '../context/UserContext';

const Friend = (props) => {
    const { setFriends } = useContext(UserContext);

    const onClick = (evt) => {
        evt.preventDefault();
        removeFriend(props.person.id)
            .then(resp => {
                setFriends(resp.data);
            })
            .catch(err => {
                console.log(err.response.message);
            })
    }

    return (
        <div className="friend-tile">
            <div className="level">
                <div className="level-item level-left">
                </div>
                <div className="level-item level-center">
                    <h4 className="title is-6">
                        {props.person.name}
                    </h4>
                </div>
                <div className="level-item level-right">
                    <button className="remove-button" onClick={onClick}>
                        <i className="fas fa-user-slash"></i>
                    </button>
                </div>
            </div>

            <div className="friend-content">
                <p>{props.person.age}</p>
                <p>{props.person.email}</p>
            </div>
        </div>
    );
};

export default Friend;