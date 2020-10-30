import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../api/login';

const initialFormValues = {
    username: "",
    password: ""
};

const Login = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const history = useHistory();

    const onChange = evt => {
        evt.preventDefault();
        setFormValues({...formValues, [evt.target.name]: evt.target.value});
    };

    const onSubmit = evt => {
        evt.preventDefault();
        login({ username: formValues.username, password: formValues.password }).then(() => {
            // Push user to new page
            history.push("/");
        });
    };

    return (
        <div className="box">
            <div className="has-text-centered">
                <h2 className="title is-4">Login</h2>
            </div>
            <div className="form-container">
                <form onSubmit={onSubmit}>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input name="username" onChange={onChange} value={formValues.username} class="input" type="username" placeholder="Username" required />
                            <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input name="password" onChange={onChange} value={formValues.password} class="input" type="password" placeholder="Password" required />
                            <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field has-text-centered button-container">
                        <p class="control">
                            <button class="button is-success">
                            Login
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;