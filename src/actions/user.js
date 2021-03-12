import axios from 'axios';
import { setError } from '../reducers/errorReducer';
import { setUser } from '../reducers/userReducer';

export function signup(email, password) {
    return async dispatch => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/signup", {
                email,
                password
            })
            alert(response.data.message)
        } catch(e) {
            dispatch(setError([e.response.data.message, e.response.data.errors.errors]))
        }
    }
}

export function login(email, password) {
    return async dispatch => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            dispatch(setError([e.response.data.message]))
        }
    }
}

export function auth() {
    return async dispatch => {
        try {
            const response = await axios.get("http://localhost:5000/api/auth/auth", 
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            dispatch(setError([e.response.data.message]))
            localStorage.removeItem('token')
        }
    }
}