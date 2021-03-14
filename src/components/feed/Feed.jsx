import React from 'react';
import { useDispatch } from 'react-redux';
import { log_out } from '../../actions/user';

const Feed = () => {

    const dispatch = useDispatch()

    return (
        <div>
           User Feed 
           <button onClick={() => dispatch(log_out())}>sdfsdf</button>
        </div>
    );
};

export default Feed;