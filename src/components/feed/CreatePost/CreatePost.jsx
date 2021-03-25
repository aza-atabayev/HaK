import React, { createRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createPost } from '../../../actions/posts';
import Input from '../../input/Input';
import TextArea from '../../input/TextArea';

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    let next = createRef()

    function focusNext (e) {
        if (e.key === "Enter") {
            next.current.focus()
        }
    }

    const dispatch = useDispatch()

    return (
        <div>
            <div className="card my-5">
                <header className="card-header">
                    <p className="card-header-title">
                        Text
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <div className="field">
                            <div className="control">
                                <Input onKeyPress={(e)=> {focusNext(e)}} value={title} setValue={setTitle} className="input" type="text" placeholder="Title (required)"/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <TextArea ref={next} value={text} setValue={setText} className="textarea is-small" placeholder="Text (optional)"/>
                            </div>
                        </div>
                        <div className="field">
                            <NavLink to="/"><button onClick={() => dispatch(createPost(title, text))} className="button is-link">Post</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;