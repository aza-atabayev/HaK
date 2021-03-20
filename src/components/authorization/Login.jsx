import React, { createRef, useState } from 'react';
import './authorization.css';
import { login } from '../../actions/user';
import Input from '../input/Input';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {

    document.title = "Login on HaK"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const errors = useSelector(state => state.errors)
    const user = useSelector(state => state.user)

    let next = createRef()

    function focusNext (e) {
        if (e.key === "Enter") {
            next.current.focus()
        }
    }

    const dispatch = useDispatch()
    
    return (
    <div className="columns full">
        <div className="column full has-background-dark">

        </div>
        <div className="column has-background-light">
            <div className="columns is-centered is-vcentered full">
                <div className="column is-6">
                    <h1 className="title">Log in to HaK</h1>
                    <div className="field ">
                        <label className="label">KAIST email</label>
                        <div className="control">
                            <Input onKeyPress={(e)=> {focusNext(e)}} value={email} setValue={setEmail} className="input" type="text" placeholder="example@kaist.ac.kr"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <Input ref = {next} onKeyPress={(e)=> { if(e.key === "Enter") {dispatch(login(email, password))}}} value={password} setValue={setPassword} className="input" type="password"/>
                        </div>
                    </div>
                    <div className="field">
                        {errors.title ?
                        <div className="notification is-danger is-light">
                            <strong>{errors.title}</strong>
                        </div>
                        : <div></div>}
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button onClick={() => dispatch(login(email, password))} className="button is-link">Log in</button>
                        </div>
                        <div className="control">
                            <a href="/registration"className="button is-link is-light">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Login;