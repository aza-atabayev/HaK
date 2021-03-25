import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likePost } from '../../../actions/posts';

const Post = React.forwardRef((props, ref) => {
    const userId = useSelector(state => state.user.id)

    function handleLike() {    
        var likeIcon = document.getElementById(props.post._id + "1")
        var reputationDisplay = document.getElementById(props.post._id + "2")
        var dislikeIcon = document.getElementById(props.post._id + "3")

        if (likeIcon.classList.contains("far")) { // not liked yet
            likeIcon.classList.add('fa')
            likeIcon.classList.remove('far')
            if (dislikeIcon.classList.contains("fa")) { // was disliked
                dislikeIcon.classList.remove('fa')
                dislikeIcon.classList.add('far')
                reputationDisplay.innerHTML = parseInt(reputationDisplay.innerHTML, 10) + 2
            }
            else {reputationDisplay.innerHTML = parseInt(reputationDisplay.innerHTML, 10) + 1}
        }
        else { // already liked
            likeIcon.classList.add('far')
            likeIcon.classList.remove('fa')
            reputationDisplay.innerHTML = parseInt(reputationDisplay.innerHTML, 10) - 1
        }       

        // send update to the server
        dispatch(likePost(props.post, 1))
    }

    function handleDislike() {
        var likeIcon = document.getElementById(props.post._id + "1")
        var reputationDisplay = document.getElementById(props.post._id + "2")
        var dislikeIcon = document.getElementById(props.post._id + "3")

        if (dislikeIcon.classList.contains("far")) { // not disliked yet
            dislikeIcon.classList.add('fa')
            dislikeIcon.classList.remove('far')
            if (likeIcon.classList.contains("fa")) { // was liked
                likeIcon.classList.remove('fa')
                likeIcon.classList.add('far')
                reputationDisplay.innerHTML = parseInt(reputationDisplay.innerHTML, 10) - 2
            }
            else {reputationDisplay.innerHTML = parseInt(reputationDisplay.innerHTML, 10) - 1}
        }
        else { // already disliked
            dislikeIcon.classList.add('far')
            dislikeIcon.classList.remove('fa')
            reputationDisplay.innerHTML = parseInt(reputationDisplay.innerHTML, 10) + 1
        }       

        // send update to the server
        dispatch(likePost(props.post, 0))
    }

    function date() {
        var date = new Date().getTime() - new Date(props.date).getTime()
        date = date / 1000 / 60 / 60/ 24
        if (date >= 365) {return Math.floor(date / 365) + ` year${((Math.floor(date / 365) === 1) ? "" : "s")} ago` }
        else if (date >= 30) {return Math.floor(date / 30) + ` month${((Math.floor(date / 30) === 1) ? "" : "s")} ago` }
        else if (date >= 2) { return Math.floor(date) + " days ago" }
        else if (date >= 1) { return "Yesterday" }
        else { 
            date = date * 24 * 60
            if (date > 60) { return Math.floor(date/60) + ` hour${((Math.floor(date/60) === 1) ? "" : "s")} ago`}
            else if (date < 1) {return "Just now"}
            else { return Math.floor(date) + ` minute${((Math.floor(date) === 1) ? "" : "s")} ago`  }
        }
    }

    const dispatch = useDispatch()

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
                    <a className="icon"><i onClick={()=>{handleLike()}} id={props.post._id+"1"} className={props.liked ? "fa fa-thumbs-up": "far fa-thumbs-up"}></i></a>
                    <span className="mx-5" id={props.post._id+"2"}>{props.reputation}</span>
                    <a className="icon"><i onClick={()=>{handleDislike()}} id={props.post._id+"3"} className={props.disliked ? "fa fa-thumbs-down": "far fa-thumbs-down"}></i></a>
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