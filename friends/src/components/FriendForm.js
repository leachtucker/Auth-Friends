import React, { useContext, useState } from 'react';
import { addFriend } from '../api/addFriend';

import { UserContext } from '../context/UserContext';

const initialFormValues = {
    name: "",
    email: "",
    age: 0
}

const FriendForm = () => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const { setFriends } = useContext(UserContext);

    // EVENT HANDLERS
    const onSubmit = (evt) => {
        evt.preventDefault();
        addFriend({ name: formValues.name, email: formValues.email, age: formValues.age })
            .then(resp => {
                setFriends(resp.data);
            })
            .catch(err => {
                console.log(err.response.message);
            });
    }

    const onChange = (evt) => {
        evt.preventDefault();
        setFormValues({...formValues, [evt.target.name]: evt.target.value});
    }

    return (
        <div className="container friendform">
            <div className="has-text-centered">
                <h3 className="title is-6">Add a Friend</h3>
            </div>
            <div className="form-container">
                <form onSubmit={onSubmit}>
                    <div className="field">
                        <p className="control">
                            <input name="name" onChange={onChange} value={formValues.name} className="input" type="username" autoComplete="username" placeholder="Name" required />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <input name="email" onChange={onChange} value={formValues.email} className="input" type="email" placeholder="Email" required />
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <input name="age" onChange={onChange} value={formValues.age} className="input" type="number" placeholder="Age" required />
                        </p>
                    </div>
                    <div className="field has-text-centered button-container">
                        <p className="control">
                            <button className="button is-success">
                                Add
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FriendForm;