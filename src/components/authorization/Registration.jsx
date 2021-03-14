import React, { useState } from 'react';
import './authorization.css';
import { signup } from '../../actions/user';
import Input from '../input/Input';
import { useDispatch, useSelector } from 'react-redux';

const Registration = () => {
    document.title = "Sign up for HaK"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const errors = useSelector(state => state.errors)

    const dispatch = useDispatch()

    return (
    <div className="columns full">
        <div className="column full has-background-dark">

        </div>
        <div className="column has-background-light">
            <div className="columns is-centered is-vcentered full">
                <div className="column is-6">
                    <form onKeyPress={(e)=> { if(e.key === 13) {dispatch(signup(email, password))}}}>
                        <h1 className="title">Create your account</h1>
                        <div className="field ">
                            <label className="label">KAIST email</label>
                            <div className="control">
                                <Input value={email} setValue={setEmail} className="input" type="text" placeholder="example@kaist.ac.kr"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <Input value={password} setValue={setPassword} className="input" type="password"/>
                            </div>
                        </div>
                        <div className="field">
                            {errors.title ?<div className="notification is-danger is-light">
                                <strong>{errors.title}</strong>
                                {errors.details.map((val)=> {
                                    return <p>{val.msg}</p>
                                })}
                            </div>
                            : <div></div>}
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button onClick={() => dispatch(signup(email, password))} className="button is-link">Sign up</button>
                            </div>
                            <div className="control">
                                <a href="/login" className="button is-link is-light">Log in</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Registration;