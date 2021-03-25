import React from 'react';

const Post = React.forwardRef((props, ref) => {
    function handleLike(e) {    
        e.stopPropagation()
        alert(props.post.text + " is liked")
    }

    function date() {
        var date = new Date().getTime() - new Date(props.date).getTime()
        date = date / 1000 / 60 / 60/ 24
        if (date >= 365) {return Math.floor(date / 365) + ` year${((Math.floor(date / 365) == 1) ? "" : "s")} ago` }
        else if (date >= 30) {return Math.floor(date / 30) + ` month${((Math.floor(date / 30) == 1) ? "" : "s")} ago` }
        else if (date >= 2) { return Math.floor(date) + " days ago" }
        else if (date >= 1) { return "Yesterday" }
        else { 
            date = date * 24 * 60
            if (date < 60) { return Math.floor(date) + ` minute${((Math.floor(date) == 1) ? "" : "s")} ago` }
            else { return Math.floor(date/60) + ` hour${((Math.floor(date/60) == 1) ? "" : "s")} ago`}
        }
    }


    return (
        <div className="card mb-3 post" ref={ref}>
            <div className="card-content">
                <div className="columns">
                    <div className="column"><p className="is-size-7">{props.author}</p></div>
                    <div className="column"><p className="is-size-7 has-text-right">{date()}</p></div>
                </div>
                <p className="title">{props.title}</p>
                <div className="content">{props.text}</div>
            </div>
            <footer className="card-footer">
                <div className="card-footer-item">
                    <a onClick={(e)=>{handleLike(e)}} className="icon"><i className="far fa-thumbs-up"></i></a>
                    <span className="mx-5">{props.reputation}</span>
                    <a className="icon"><i className="far fa-thumbs-down"></i></a>
                </div>
                <a className="card-footer-item icon-text">
                    <span className="icon"><i className="far fa-comments-alt"></i></span>
                </a>
                <a className="card-footer-item">
                    <span className="icon"><i className="far fa-share-alt"></i></span>
                </a>
            </footer>
        </div>
    );
});

export default Post;