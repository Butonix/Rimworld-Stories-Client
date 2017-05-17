import {appReducer, initialState} from './index';
import {tickDownTimer,
    uploadImageSuccess,
    resetProfile,
    resetCurrentStory,
    resetStoryLandingList,
    toggleDisplayLogin,
    starStorySuccess,
    resetCurrentDraft,
    getDraftSuccess,
    newCommentSuccess,
    toggleAutoSave,
    saveDraftSuccess,
    resetUser,
    displayLoading,
    toggleBurger,
    fetchUserSuccess,
    changeUsernameSuccess,
    fetchProfileSuccess,
    fetchStorySuccess,
    fetchLandingStoriesSuccess
} from '../actions';

describe('appReducer', () => {

    describe('fetchLandingStoriesSuccess', () => {
        let state = Object.assign({}, initialState);
        it('Should set landing stories', () => {
            state = appReducer(state, fetchLandingStoriesSuccess({stories: ['story1', 'story2']}));
            expect(state.landingList.list).toEqual(['story1', 'story2']);
        });
    });

    describe('fetchStorySuccess', () => {
        let state = Object.assign({}, initialState);
        it('Should set currentStory', () => {
            state = appReducer(state, fetchStorySuccess({currentStory: 'this is a test'}));
            expect(state.currentStory).toEqual('this is a test');
        });
    });

    describe('fetchProfileSuccess', () => {
        let state = Object.assign({}, initialState);
        it('Should set visitedProfile', () => {
            state = appReducer(state, fetchProfileSuccess({_id: '123456'}));
            expect(state.visitedProfile).toEqual({_id: '123456'});
        });
    });

    describe('changeUsernameSuccess', () => {
        let state = Object.assign({}, initialState);
        it('Should set currentUser username', () => {
            state = appReducer(state, changeUsernameSuccess({currentUser: {username: 'test username'}}));
            expect(state.currentUser.username).toEqual('test username');
        });
    });

    describe('fetchUserSuccess', () => {
        let state = Object.assign({}, initialState);
        it('Should set currentUser', () => {
            state = appReducer(state, fetchUserSuccess({currentUser: {_id: '123456'}, isLoggedIn: true}));
            expect(state.currentUser._id).toEqual('123456');
        });
    });

    describe('toggleBurger', () => {
        let state = Object.assign({}, initialState);
        it('Should toggle burger display', () => {
            state = appReducer(state, toggleBurger(true));
            expect(state.burgerOpen).toEqual(true);
        });
    });

    describe('displayLoading', () => {
        let state = Object.assign({}, initialState);
        it('Should toggle loading display', () => {
            state = appReducer(state, displayLoading(true));
            expect(state.loading).toEqual(true);
        });
    });

    describe('resetUser', () => {
        let state = Object.assign({}, initialState);
        it('Should reset current user', () => {
            state = appReducer(state, resetUser());
            expect(state.currentUser).toEqual(initialState.currentUser);
        });
    });

    describe('saveDraftSuccess', () => {
        let state = Object.assign({}, initialState);
        it('Should set currentDraft storyID', () => {
            state = appReducer(state, saveDraftSuccess({storyID: '123456'}));
            expect(state.currentDraft._id).toEqual('123456');
        });
    });

    describe('toggleAutoSave', () => {
        let state = Object.assign({}, initialState);
        it('Should toggle auto save', () => {
            state = appReducer(state, toggleAutoSave());
            expect(state.autoSave).toEqual(!initialState.autoSave);
        });
    });

    describe('newCommentSuccess', () => {
        let state = Object.assign({}, initialState);
        it('Should set newCommentSuccess', () => {
            state = appReducer(state, newCommentSuccess({comments: "this is a test"}));
            expect(state.currentStory.comments).toEqual("this is a test");
        });
    });

    describe('getDraftSuccess', () => {
        let state = Object.assign({}, initialState);
        it('Should set currentDraft', () => {
            state = appReducer(state, getDraftSuccess({currentDraft: "this is a test"}));
            expect(state.currentDraft).toEqual("this is a test");
        });
    });

    describe('resetCurrentDraft', () => {
        let state = Object.assign({}, initialState);
        it('Should reset currentDraft', () => {
            state = appReducer(state, resetCurrentDraft());
            expect(state.currentDraft).toEqual(initialState.currentDraft);
        });
    });

    describe('starStorySuccess', () => {
        let state = Object.assign({}, initialState);
        it('Should update number of stars', () => {
            state = appReducer(state, starStorySuccess({story:{stars: 'test'}}));
            expect(state.currentStory.stars).toEqual('test');
        });
    });

    describe('toggleDisplayLogin', () => {
        let state = Object.assign({}, initialState);
        it('Should toggle display login', () => {
            state = appReducer(state, toggleDisplayLogin());
            expect(state.loginShow).toEqual(!initialState.loginShow);
        });
    });

    describe('resetStoryLandingList', () => {
        let state = Object.assign({}, initialState);
        it('Should reset landing list', () => {
            state = appReducer(state, resetStoryLandingList());
            expect(state.landingList).toEqual(initialState.landingList);
        });
    });

    describe('resetCurrentStory', () => {
        let state = Object.assign({}, initialState);
        it('Should reset currentStory', () => {
            state = appReducer(state, resetCurrentStory());
            expect(state.currentStory).toEqual(initialState.currentStory);
        });
    });

    describe('resetProfile', () => {
        let state = Object.assign({}, initialState);
        it('Should reset visitedProfile', () => {
            state = appReducer(state, resetProfile());
            expect(state.visitedProfile).toEqual(initialState.visitedProfile);
        });
    });

    describe('uploadImageSuccess', () => {
        let state = Object.assign({}, initialState);
        it('Should change user avatar', () => {
            state = appReducer(state, uploadImageSuccess({
                type: 'avatar',
                currentUser: { avatarUrl: 'htttp://test' },
                APImessage: 'New avatar successfully uploaded!'
            }));
            expect(state.currentUser.avatarUrl).toEqual('htttp://test');
        });
    });

    describe('tickDownTimer', () => {
        let state = Object.assign({}, initialState);
        it('Should tick time down', () => {
            state = appReducer(state, tickDownTimer());
            expect(state.alert.timer).toEqual(-1);
        });
    });

    it('Should set the initial state when nothing is passed in', () => {
        const state = appReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(initialState);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = appReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toEqual(currentState);
    });
});
