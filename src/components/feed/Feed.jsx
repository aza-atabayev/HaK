import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { log_out } from '../../actions/user';

import { getPosts } from '../../actions/posts';
import Post from './Post';

const Feed = () => {
    const dispatch = useDispatch()
    
    const [isLoading, setIsLoading] = useState(false)
    const posts = useSelector(state => state.posts.posts)
    const page = useSelector(state => state.posts.page)
    const loadMore = useSelector(state => state.posts.loadMore)

    const observer = useRef()

    const lastItem = useCallback((element) => {
        // remove current observer
        if (observer.current) {
            observer.current.disconnect()
        }
        // create new observer
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && loadMore) {
                dispatch(getPosts(page))
            }
        }, {threshold: 1})

        if (element) {
            observer.current.observe(element)
        }
    }, [page, loadMore])

    const items = posts.map((post, index) => {
        if (index + 1 === posts.length) {
            return <Post ref={lastItem} key={post._id} title={post.title} text={post.text} author={post.author} date={post.date}/> 
        }
        else {
            return <Post key={post._id} title={post.title} text={post.text} author={post.author} date={post.date}/> 
        }
    })

    useEffect(() => {
        setIsLoading(true)
        dispatch(getPosts(page))
        setIsLoading(false)
    },[])

    return (
        
        <div className="columns is-centered">
            <div className="column is-6">
                {items}
            </div>

            <button onClick={() => dispatch(log_out())}>sdfsdf</button>
        </div>
    );
};

export default Feed;