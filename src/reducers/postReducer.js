const SET_POSTS = "GET_POSTS";
const STOP_POSTS = "STOP_POSTS";

const defaultState = {
    posts: [],
    page: 1,
    loadMore: true,
}

export default function postReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_POSTS:
            return {...state, 
                    posts: state.posts.concat(action.payload),
                    page: state.page + 1
                    }
        case STOP_POSTS:
            return {...state,
                    loadMore: false}
        default:
            return state
    }
}

export const setPosts = (posts) => ({type: SET_POSTS, payload: posts})
export const stopPosts = () => ({type: STOP_POSTS})