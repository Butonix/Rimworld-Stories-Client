import {
    DISPLAY_LOADING,
    displayLoading,
    TOGGLE_BURGER,
    toggleBurger,
    TICK_DOWN_TIMER,
    tickDownTimer,
    toggleDisplayLogin,
    SET_MESSAGE,
    setMessage,
    RESET_PROFILE,
    resetProfile,
    RESET_USER,
    resetUser,
    RESET_CURRENT_STORY,
    resetCurrentStory,
    RESET_CURRENT_DRAFT,
    resetCurrentDraft,
    RESET_STORY_LANDING_LIST,
    resetStoryLandingList,
    FETCH_USER_SUCCESS,
    fetchUserSuccess,
    STAR_STORY_SUCCESS,
    starStorySuccess,
    FETCH_STORY_SUCCESS,
    fetchStorySuccess,
    NEW_COMMENT_SUCCESS,
    newCommentSuccess,
    TOGGLE_AUTO_SAVE,
    toggleAutoSave,
    SAVE_DRAFT_FIELDS_IN_STATE,
    saveDraftFieldsInState,
    GET_DRAFT_SUCCESS,
    getDraftSuccess,
    SAVE_DRAFT_SUCCESS,
    saveDraftSuccess,
    FETCH_LANDING_STORIES_SUCCESS,
    fetchLandingStoriesSuccess,
    FETCH_PROFILE_SUCCESS,
    fetchProfileSuccess,
    CHANGE_USERNAME_SUCCESS,
    changeUsernameSuccess,
    UPLOAD_IMAGE_SUCCESS,
    uploadImageSuccess
} from './index';

describe('UPLOAD_IMAGE_SUCCESS', () => {
    it('Should return the action', () => {
        const response = {testing: 'testing'}
        const action = uploadImageSuccess(response);
        expect(action.type).toEqual('UPLOAD_IMAGE_SUCCESS');
        expect(action.response).toEqual(response);
    });
});

describe('CHANGE_USERNAME_SUCCESS', () => {
    it('Should return the action', () => {
        const response = {testing: 'testing'}
        const action = changeUsernameSuccess(response);
        expect(action.type).toEqual('CHANGE_USERNAME_SUCCESS');
        expect(action.response).toEqual(response);
    });
});

describe('FETCH_PROFILE_SUCCESS', () => {
    it('Should return the action', () => {
        const userProfile = {testing: 'testing'}
        const action = fetchProfileSuccess(userProfile);
        expect(action.type).toEqual('FETCH_PROFILE_SUCCESS');
        expect(action.userProfile).toEqual(userProfile);
    });
});

describe('FETCH_LANDING_STORIES_SUCCESS', () => {
    it('Should return the action', () => {
        const response = {testing: 'testing'}
        const action = fetchLandingStoriesSuccess(response);
        expect(action.type).toEqual('FETCH_LANDING_STORIES_SUCCESS');
        expect(action.response).toEqual(response);
    });
});

describe('SAVE_DRAFT_SUCCESS', () => {
    it('Should return the action', () => {
        const response = {testing: 'testing'}
        const action = saveDraftSuccess(response);
        expect(action.type).toEqual('SAVE_DRAFT_SUCCESS');
        expect(action.response).toEqual(response);
    });
});

describe('GET_DRAFT_SUCCESS', () => {
    it('Should return the action', () => {
        const response = {testing: 'testing'}
        const action = getDraftSuccess(response);
        expect(action.type).toEqual('GET_DRAFT_SUCCESS');
        expect(action.response).toEqual(response);
    });
});

describe('SAVE_DRAFT_FIELDS_IN_STATE', () => {
    it('Should return the action', () => {
        const title = 'test title';
        const story = 'test story';
        const action = saveDraftFieldsInState(title, story);
        expect(action.type).toEqual(SAVE_DRAFT_FIELDS_IN_STATE);
        expect(action.title).toEqual(title);
        expect(action.story).toEqual(story);
    });
});

describe('TOGGLE_AUTO_SAVE', () => {
    it('Should return the action', () => {
        const action = toggleAutoSave();
        expect(action.type).toEqual('TOGGLE_AUTO_SAVE');
    });
});

describe('NEW_COMMENT_SUCCESS', () => {
    it('Should return the action', () => {
        const response = {testing: 'testing'}
        const action = newCommentSuccess(response);
        expect(action.type).toEqual('NEW_COMMENT_SUCCESS');
        expect(action.response).toEqual(response);
    });
});

describe('FETCH_STORY_SUCCESS', () => {
    it('Should return the action', () => {
        const response = {testing: 'testing'}
        const action = fetchStorySuccess(response);
        expect(action.type).toEqual('FETCH_STORY_SUCCESS');
        expect(action.response).toEqual(response);
    });
});

describe('FETCH_USER_SUCCESS', () => {
    it('Should return the action', () => {
        const action = fetchUserSuccess();
        expect(action.type).toEqual('FETCH_USER_SUCCESS');
    });
});

describe('RESET_STORY_LANDING_LIST', () => {
    it('Should return the action', () => {
        const action = resetStoryLandingList();
        expect(action.type).toEqual('RESET_STORY_LANDING_LIST');
    });
});

describe('RESET_CURRENT_DRAFT', () => {
    it('Should return the action', () => {
        const action = resetCurrentDraft();
        expect(action.type).toEqual('RESET_CURRENT_DRAFT');
    });
});

describe('RESET_CURRENT_STORY', () => {
    it('Should return the action', () => {
        const action = resetCurrentStory();
        expect(action.type).toEqual('RESET_CURRENT_STORY');
    });
});

describe('RESET_USER', () => {
    it('Should return the action', () => {
        const action = resetUser();
        expect(action.type).toEqual('RESET_USER');
    });
});

describe('RESET_PROFILE', () => {
    it('Should return the action', () => {
        const action = resetProfile();
        expect(action.type).toEqual('RESET_PROFILE');
    });
});

describe('SET_MESSAGE', () => {
    it('Should return the action', () => {
        const message = 'test message';
        const messType = 'APImessage';
        const action = setMessage(message, messType);
        expect(action.type).toEqual(SET_MESSAGE);
        expect(action.message).toEqual(message);
        expect(action.messType).toEqual(messType);
    });
});

describe('TOGGLE_DISPLAY_LOGIN', () => {
    it('Should return the action', () => {
        const action = toggleDisplayLogin();
        expect(action.type).toEqual('TOGGLE_DISPLAY_LOGIN');
    });
});

describe('TICK_DOWN_TIMER', () => {
    it('Should return the action', () => {
        const action = tickDownTimer();
        expect(action.type).toEqual('TICK_DOWN_TIMER');
    });
});

describe('DISPLAY_LOADING', () => {
    it('Should return the action', () => {
        const param = true;
        const action = displayLoading(param);
        expect(action.type).toEqual(DISPLAY_LOADING);
        expect(action.param).toEqual(param);
    });
});

describe('TOGGLE_BURGER', () => {
    it('Should return the action', () => {
        const arg = true;
        const action = toggleBurger(arg);
        expect(action.type).toEqual(TOGGLE_BURGER);
        expect(action.arg).toEqual(arg);
    });
});
