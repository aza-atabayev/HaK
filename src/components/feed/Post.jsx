import React from 'react';

const Post = React.forwardRef((props, ref) => {
    return (
        <div className="card mb-3" ref={ref}>
            <div className="card-content">
                <div className="columns">
                    <div className="column"><p className="is-size-7">{props.author}</p></div>
                    <div className="column"><p className="is-size-7 has-text-right">{new Date(props.date).toLocaleDateString()}</p></div>
                </div>
                <p className="title">{props.title}</p>
                <div className="content">{props.text}</div>
            </div>
            <footer className="card-footer">
                <a href="" className="card-footer-item">
                    <span className="icon"><i className="far fa-thumbs-up"></i></span>
                    <span>Like</span>
                </a>
                <a href="" className="card-footer-item">
                    <span className="icon"><i className="far fa-thumbs-down"></i></span>
                    <span>Dislike</span>
                </a>
                <a href="" className="card-footer-item icon-text">
                    <span className="icon"><i className="far fa-comments-alt"></i></span>
                    <span>Comment</span>
                </a>
                <a href="" className="card-footer-item">
                    <span className="icon"><i className="far fa-share-alt"></i></span>
                    <span>Share</span>
                </a>
            </footer>
        </div>
    );
});

export default Post;