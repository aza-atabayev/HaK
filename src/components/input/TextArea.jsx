import React from 'react';

const TextArea = React.forwardRef((props, ref) => {
    return (
        <textarea onChange={(event) => props.setValue(event.target.value)}
        ref = {ref}
        value = {props.value}
        className = {props.className}
        placeholder = {props.placeholder}/>
    );
});

export default TextArea;