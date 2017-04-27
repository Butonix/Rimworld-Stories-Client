import {POST_STORY} from '../actions/';

// INITIALIZATION
export const initialState = Object.assign({}, {
});

// ACTIONS
export const appReducer = (state=initialState, action) => {

    if(action.type === POST_STORY) {

    }

    return state;
};
