import axios from 'axios';
import { setError } from '../reducers/errorReducer';

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
