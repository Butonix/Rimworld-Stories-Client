import {API_URL} from '../config.js';

export const DISPLAY_LOADING = 'DISPLAY_LOADING';
export const displayLoading = param => ({
    type: DISPLAY_LOADING,
    param
});

export const TOGGLE_BURGER = 'TOGGLE_BURGER';
export const toggleBurger = () => ({
    type: TOGGLE_BURGER
});

export const SET_MESSAGE = 'SET_MESSAGE';
export const setMessage = (message, messType) => ({
    type: SET_MESSAGE,
    message,
    messType
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

export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const fetchProfileSuccess = userProfile => ({
    type: FETCH_PROFILE_SUCCESS,
    userProfile
});
/*
export const fetchProfile = (userId) => dispatch => {
    dispatch(displayLoading(true));
    fetch(API_URL + '/profile/get/' + userId, {
        credentials: 'include'
    }).then(res => {
        if (!res.ok) {
            dispatch(setMessage('Error: ' + res.statusText, 'error-message'));
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(userProfile => {
        dispatch(displayLoading(false));
        dispatch(fetchProfileSuccess(userProfile));
    }).catch(err => {
        dispatch(setMessage('Error: ' + err, 'error-message'));
    });
};
*/

export const fetchProfile = (userId) => dispatch => {
    const cb = (arg) => fetchProfileSuccess(arg);
    fetchAPI('/profile/get/' + userId, cb, dispatch);
};

// blueprint function to fetch rom the API, just defin the url and the callback function
function fetchAPI(url, cb, dispatch) {
    dispatch(displayLoading(true));
    fetch(API_URL + url, {
        credentials: 'include'
    }).then(res => {
        if (!res.ok) {
            dispatch(setMessage('Error: ' + res.statusText, 'error-message'));
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(userProfile => {
        dispatch(displayLoading(false));
        dispatch(cb(userProfile));
    }).catch(err => {
        dispatch(setMessage('Error: ' + err, 'error-message'));
    });
}
