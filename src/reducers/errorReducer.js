const SET_ERROR = "SET_ERROR";

const defaultState = {
    title: "",
    details: []
}

export default function errorReducer(state=defaultState, action) {
    switch (action.type) {
        case SET_ERROR:
            return {...state, title: action.payload[0], details: action.payload[1]}
        default: 
            return state
    }
}

export const setError = (title, details) => ({type: SET_ERROR, payload: title, details})