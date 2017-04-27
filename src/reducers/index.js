import {CREATE_ROOM} from '../actions/';

// INITIALIZATION
export const initialState = Object.assign({}, {
    currentGame: 'intro',
    timerBetweenGames: 2000,
    timeOut: false,
    over: false,
    points: 0,
    won: false
});

// ACTIONS
export const appReducer = (state=initialState, action) => {

    if(action.type === CREATE_ROOM) {
        
    }

    return state;
};
