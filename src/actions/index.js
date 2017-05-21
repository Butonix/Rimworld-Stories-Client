import {API_URL} from '../config.js';
const request = require('superagent');
import { push } from 'react-router-redux';
const arrify = require('arrify');

export const DISPLAY_LOADING = 'DISPLAY_LOADING';
export const displayLoading = param => ({
    type: DISPLAY_LOADING,
    param
});

export const TOGGLE_BURGER = 'TOGGLE_BURGER';
export const toggleBurger = (arg) => ({
    type: TOGGLE_BURGER,
    arg: arg || ''
});

export const TICK_DOWN_TIMER = 'TICK_DOWN_TIMER';
export const tickDownTimer = () => ({
    type: TICK_DOWN_TIMER
});

export const TOGGLE_DISPLAY_LOGIN = 'TOGGLE_DISPLAY_LOGIN';
export const toggleDisplayLogin = () => ({
    type: TOGGLE_DISPLAY_LOGIN
});

export const logIn = (data) => dispatch => {
    SARequestAPI('post', '/auth/login', data, null, dispatch);
};

export const signUp = (data) => dispatch => {
    SARequestAPI('post', '/auth/signup', data, toggleDisplayLogin, dispatch);
};

export const SET_MESSAGE = 'SET_MESSAGE';
export const setMessage = (message, messType) => ({
    type: SET_MESSAGE,
    message,
    messType
});

export const RESET_PROFILE = 'RESET_PROFILE';
export const resetProfile = () => ({
    type: RESET_PROFILE
});

export const RESET_USER = 'RESET_USER';
export const resetUser = () => ({
    type: RESET_USER
});

export const RESET_CURRENT_STORY = 'RESET_CURRENT_STORY';
export const resetCurrentStory = () => ({
    type: RESET_CURRENT_STORY
});

export const RESET_CURRENT_DRAFT = 'RESET_CURRENT_DRAFT';
export const resetCurrentDraft = () => ({
    type: RESET_CURRENT_DRAFT
});

export const RESET_STORY_LANDING_LIST = 'RESET_STORY_LANDING_LIST';
export const resetStoryLandingList = () => ({
    type: RESET_STORY_LANDING_LIST
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = response => ({
    type: FETCH_USER_SUCCESS,
    response
});

export const fetchUser = () => dispatch => {
    SARequestAPI('get', '/auth/get-user', null, fetchUserSuccess, dispatch);
};

export const STAR_STORY_SUCCESS = 'STAR_STORY_SUCCESS';
export const starStorySuccess = response => ({
    type: STAR_STORY_SUCCESS,
    response
});

export const starStory = (storyID, type) => dispatch => {
    SARequestAPI('post', '/story/star/' + storyID, {type}, starStorySuccess, dispatch);
};

export const deleteStory = (storyID) => dispatch => {
    SARequestAPI('delete', '/story/' + storyID, null, null, dispatch);
};

export const FETCH_STORY_SUCCESS = 'FETCH_STORY_SUCCESS';
export const fetchStorySuccess = response => ({
    type: FETCH_STORY_SUCCESS,
    response
});

export const fetchStory = (storyID) => dispatch => {
    SARequestAPI('get', '/story/get/' + storyID, null, fetchStorySuccess, dispatch);
};

export const NEW_COMMENT_SUCCESS = 'NEW_COMMENT_SUCCESS';
export const newCommentSuccess = response => ({
    type: NEW_COMMENT_SUCCESS,
    response
});

export const postNewComment = (data) => dispatch => {
    SARequestAPI('post', '/comment/new-comment', data, newCommentSuccess, dispatch);
};

export const deleteComment = (commentID, storyID) => dispatch => {
    SARequestAPI('delete', '/comment/' + commentID, {storyID}, newCommentSuccess, dispatch);
};

export const TOGGLE_AUTO_SAVE = 'TOGGLE_AUTO_SAVE';
export const toggleAutoSave = response => ({
    type: TOGGLE_AUTO_SAVE
});

export const SAVE_DRAFT_FIELDS_IN_STATE = 'SAVE_DRAFT_FIELDS_IN_STATE';
export const saveDraftFieldsInState = (title, story) => ({
    type: SAVE_DRAFT_FIELDS_IN_STATE,
    title,
    story
});

export const GET_DRAFT_SUCCESS = 'GET_DRAFT_SUCCESS';
export const getDraftSuccess = response => ({
    type: GET_DRAFT_SUCCESS,
    response
});

export const getDraft = (storyID) => dispatch => {
    SARequestAPI('get', '/story/get-draft/' + storyID, null, getDraftSuccess, dispatch);
};

export const updateStory = (data) => dispatch => {
    SARequestAPI('put', '/story/update', data, null, dispatch);
};

export const SAVE_DRAFT_SUCCESS = 'SAVE_DRAFT_SUCCESS';
export const saveDraftSuccess = response => ({
    type: SAVE_DRAFT_SUCCESS,
    response
});

export const saveDraft = (data) => dispatch => {
    SARequestAPI('post', '/story/save-draft', data, saveDraftSuccess, dispatch);
};

export const FETCH_LANDING_STORIES_SUCCESS = 'FETCH_LANDING_STORIES_SUCCESS';
export const fetchLandingStoriesSuccess = response => ({
    type: FETCH_LANDING_STORIES_SUCCESS,
    response
});

export const fetchLandingStories = (filters) => dispatch => {
    SARequestAPI('post', '/story/get-list', {filters: filters}, fetchLandingStoriesSuccess, dispatch);
};

export const ensureLogin = () => dispatch => {
    SARequestAPI('get', '/auth/ensure-login', null, fetchUserSuccess, dispatch);
};

export const logOut = () => dispatch => {
    SARequestAPI('get', '/auth/log-out', null, resetUser, dispatch);
};

export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const fetchProfileSuccess = userProfile => ({
    type: FETCH_PROFILE_SUCCESS,
    userProfile
});

export const fetchProfile = (userId) => dispatch => {
    SARequestAPI('get', '/profile/get/' + userId, null, fetchProfileSuccess, dispatch);
};

export const CHANGE_USERNAME_SUCCESS = 'CHANGE_USERNAME_SUCCESS';
export const changeUsernameSuccess = response => ({
    type: CHANGE_USERNAME_SUCCESS,
    response
});

export const submitNewUsername = (username) => dispatch => {
    SARequestAPI('post', '/profile/change-username', {username}, changeUsernameSuccess, dispatch);
};

export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const uploadImageSuccess = response => ({
    type: UPLOAD_IMAGE_SUCCESS,
    response
});

export const uploadImage = (data) => dispatch => {
    // loop through formData entries to detect folder
    for (var pair of data.entries()) {
        if (pair[0] === 'folder' && pair[1] === 'avatars') {
            SARequestAPI('post', '/profile/upload-avatar', data, uploadImageSuccess, dispatch);
        } else if (pair[0] === 'folder' && pair[1] === 'screenshots') {
            SARequestAPI('post', '/story/upload-screenshot', data, uploadImageSuccess, dispatch);
        }
    }
};

// blueprint superagent function to request data from the API
function SARequestAPI(type, url, data, actionCreator, dispatch) {
    //console.log('SA request to: ' + API_URL + url);
    dispatch(displayLoading(true));
    request(type, API_URL + url)
      .withCredentials()
      .send(data)
      .end(function(err, resp) {
        dispatch(displayLoading(false));
        if (err) {
            dispatch(setMessage(String(err), 'error-message'));
        } else {
            const apiResp = JSON.parse(resp.text);
            if (apiResp.redirect) {
                dispatch(push(apiResp.redirect));
            }
            if (apiResp.APImessage) {
                dispatch(setMessage(apiResp.APImessage, 'alert-message'));
            }
            if (apiResp.APIerror) {
                dispatch(setMessage(apiResp.APIerror, 'error-message'));
            } else {
                arrify(actionCreator).forEach((ac) => {
                    dispatch(ac(apiResp));
                })
            }
        }
    });
}
