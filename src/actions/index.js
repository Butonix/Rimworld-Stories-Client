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

export const TICK_DOWN_TIMER = 'TICK_DOWN_TIMER';
export const tickDownTimer = () => ({
    type: TICK_DOWN_TIMER
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
    const cb = (arg) => fetchUserSuccess(arg);
    fetchAPI('/auth/get-user', cb, dispatch);
};

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const logOutSuccess = (user) => ({
    type: LOG_OUT_SUCCESS,
    user
});

export const logOut = () => dispatch => {
    const cb = (arg) => logOutSuccess(arg);
    fetchAPI('/auth/log-out', cb, dispatch, 'You are now logged out');
};

export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const fetchProfileSuccess = userProfile => ({
    type: FETCH_PROFILE_SUCCESS,
    userProfile
});

export const fetchProfile = (userId) => dispatch => {
    const cb = (arg) => fetchProfileSuccess(arg);
    fetchAPI('/profile/get/' + userId, cb, dispatch, '');
};

// blueprint function to fetch data from the API, just define the url, the callback function and the success message, if any
function fetchAPI(url, cb, dispatch, message) {
    console.log('fetching from: ' + url)
    dispatch(displayLoading(true));
    fetch(API_URL + url, {
        credentials: 'include'
    }).then(res => {
        if (!res.ok) {
            dispatch(setMessage('Error: ' + res.statusText, 'error-message'));
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(resultFromAPI => {
        dispatch(displayLoading(false));
        if (message) {
            dispatch(setMessage(message, 'alert-message'));
        }
        dispatch(cb(resultFromAPI));
    }).catch(err => {
        dispatch(setMessage('Error: ' + err, 'error-message'));
    });
}

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
