import React from 'react';

const Input = React.forwardRef((props, ref) => {
    return (
        <input onChange={(event) => props.setValue(event.target.value)}
        ref = {ref}
        onKeyPress = {(e) => props.onKeyPress(e)}
        value = {props.value}
        type = {props.type}
        className = {props.className}
        placeholder = {props.placeholder}/>
    );
});

export default Input;