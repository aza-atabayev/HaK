import axios from 'axios';
import {setPosts, stopPosts} from '../reducers/postReducer'

export function getPosts(page) {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/feed?page=${page}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            // if no posts were fetched stop loading posts
            if(response.data.length === 0) {
                dispatch(stopPosts())
            } else {
            dispatch(setPosts(response.data))
            }
        } catch (e) {
            console.log(e)
        }   
    }
}