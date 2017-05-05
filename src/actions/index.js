import {API_URL} from '../config.js';
const request = require('superagent');

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
    fetchAPI('/auth/get-user', fetchUserSuccess, dispatch);
};

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const logOutSuccess = (user) => ({
    type: LOG_OUT_SUCCESS,
    user
});

export const logOut = () => dispatch => {
    fetchAPI('/auth/log-out', logOutSuccess, dispatch);
};

export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const fetchProfileSuccess = userProfile => ({
    type: FETCH_PROFILE_SUCCESS,
    userProfile
});

export const fetchProfile = (userId) => dispatch => {
    fetchAPI('/profile/get/' + userId, fetchProfileSuccess, dispatch);
};

export const CHANGE_USERNAME_SUCCESS = 'CHANGE_USERNAME_SUCCESS';
export const changeUsernameSuccess = response => ({
    type: CHANGE_USERNAME_SUCCESS,
    response
});

export const submitNewUsername = (username) => dispatch => {
    fetchAPI('/profile/change-username', changeUsernameSuccess, dispatch, {
        method: 'post',
        body: JSON.stringify({
            username
        })
    });
};

export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const uploadImageSuccess = response => ({
    type: UPLOAD_IMAGE_SUCCESS,
    response
});

export const uploadImage = (file) => dispatch => {
    superAgentRequestAPI('/profile/upload-avatar', file, uploadImageSuccess, dispatch)
};

// blueprint superagent function to request data from the API
function superAgentRequestAPI(url, file, cb, dispatch) {
    console.log('SuperAgent request to: ' + API_URL + url)
    dispatch(displayLoading(true));
    request.post(API_URL + url)
      //.withCredentials()
      .send(file)
      .end(function(err, resp) {
        dispatch(displayLoading(false));
        if (err) {
            dispatch(setMessage('Error: ' + err, 'error-message'));
        } else {
            const apiResp = JSON.parse(resp.text);
            if (apiResp.APImessage) {
                dispatch(setMessage(apiResp.APImessage, 'alert-message'));
            }
            if (apiResp.APIerror) {
                dispatch(setMessage(apiResp.APIerror, 'error-message'));
            } else {
                dispatch(cb(apiResp));
            }
        }
    });
}

// blueprint function to fetch data from the API, just define the url, the callback function, the dispatch and the options
function fetchAPI(url, cb, dispatch, reqOptions) {
    console.log('Request to: ' + API_URL + url)
    dispatch(displayLoading(true));
    fetch(API_URL + url, Object.assign({}, reqOptions, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })).then(res => {
        if (!res.ok) {
            dispatch(setMessage('Error: ' + res.statusText, 'error-message'));
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(resultFromAPI => {
        dispatch(displayLoading(false));
        // check if message
        if (resultFromAPI.APImessage) {
            dispatch(setMessage(resultFromAPI.APImessage, 'alert-message'));
        }
        // check i error
        if (resultFromAPI.APIerror) {
            dispatch(setMessage(resultFromAPI.APIerror, 'error-message'));
        // if no error, dispatch callback
        } else {
            dispatch(cb(resultFromAPI));
        }
    }).catch(err => {
        dispatch(setMessage('Error: ' + err, 'error-message'));
    });
}
