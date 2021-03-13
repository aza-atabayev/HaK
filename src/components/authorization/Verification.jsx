import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verify } from '../../actions/user';

const Verification = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(verify())
    })

    return (
        <div>
            Verification page
        </div>
    );
};

export default Verification;