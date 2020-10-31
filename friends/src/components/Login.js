import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../api/login';
import ReactLoading from 'react-loading';

const initialFormValues = {
    username: "",
    password: ""
};

const Login = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const history = useHistory();

    const onChange = evt => {
        evt.preventDefault();
        setFormValues({...formValues, [evt.target.name]: evt.target.value});
    };

    const onSubmit = evt => {
        evt.preventDefault();
        setIsLoading(true);
        login({ username: formValues.username, password: formValues.password })
            .then((resp) => {
                setIsLoading(false);
                // Push user to new page
                history.push("/");
            })
            .catch((err) => {
                setIsLoading(false);
                setError("Wrong username or password. Please try again.");
            });
    };

    return (
        <div className="box">
            <div className="has-text-centered box-header">
                <h2 className="title is-4">Login</h2>
            </div>
            <div className="form-container">
                <form onSubmit={onSubmit}>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input name="username" onChange={onChange} value={formValues.username} className="input" type="username" autoComplete="username" placeholder="Username" required />
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input name="password" onChange={onChange} value={formValues.password} className="input" type="password" autoComplete="password" placeholder="Password" required />
                            <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="error has-text-centered">
                        {error &&
                            <p>
                                {error}
                            </p>
                        }
                    </div>
                    <div className="field has-text-centered button-container">
                        <p className="control">
                            <button className="button is-success">
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