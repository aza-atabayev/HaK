import axios from 'axios';
import { useSelector } from 'react-redux';
import {setPosts, stopPosts} from '../reducers/postReducer'

export function getPosts(page, user) {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/feed?page=${page}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            // if no posts were fetched stop loading posts
            if(response.data.length === 0) {
                dispatch(stopPosts())
            } else {
            const posts = response.data
            
            for (var post in posts) {
                posts[post].liked = Boolean(user.likedId.includes(posts[post]._id))
                posts[post].disliked = Boolean(user.dislikedId.includes(posts[post]._id))
            }
            dispatch(setPosts(response.data))
            }
        } catch (e) {
            console.log(e)
        }   
    }
}

export function createPost (title, text) {
    return async dispatch => {
        try {
            var date = new Date()
            const response = await axios.post("http://localhost:5000/api/feed", { title, text, date}, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}} )
        } catch (e) {
            console.log(e)
        }
    }
}

export function likePost (post, type) {
    return async dispatch => {
        try {
            const response = await axios.put("http://localhost:5000/api/feed", {post, type}, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}} )
        }
        catch (e) {
            alert(e)
        }
    }
}