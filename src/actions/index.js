import {API_URL} from '../config.js';

export const TOGGLE_BURGER = 'TOGGLE_BURGER';
export const toggleBurger = () => ({
    type: TOGGLE_BURGER
});

export const RESET_MESSAGE = 'RESET_MESSAGE';
export const resetMessage = () => ({
    type: RESET_MESSAGE
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = user => ({
    type: FETCH_USER_SUCCESS,
    user
});

export const fetchUser = () => dispatch => {
    fetch(API_URL + '/auth/get-user', {
        credentials: 'include'
    }).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(user => {
        dispatch(fetchUserSuccess(user));
    });
};

/*
export const fetchBoard = () => dispatch => {
    dispatch(fetchBoardRequest());
    fetch('/board').then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(board => {
        dispatch(fetchBoardSuccess(board));
    }).catch(err => {
        dispatch(fetchBoardError(err));
    });
};*/
