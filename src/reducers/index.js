import {TOGGLE_BURGER, FETCH_USER_SUCCESS, SET_MESSAGE, FETCH_PROFILE_SUCCESS, DISPLAY_LOADING, TICK_DOWN_TIMER,
    CHANGE_USERNAME_SUCCESS, UPLOAD_IMAGE_SUCCESS, RESET_PROFILE, RESET_USER} from '../actions/';

// INITIALIZATION / DEFAULT STATE
export const initialState = Object.assign({}, {
    burgerOpen: false,
    loading: false,
    currentUser: {
        id: null,
        username: null,
        email: null
    },
    alert: {
        timer: 0,
        message: null,
        type: null
    },
    visitedProfile: {
        username: null,
        email: null,
        avatarUrl: null
    },
    previewStories: [
        {
            id: 12345,
            previewImage: require('../images/story.jpg'),
            title: 'How my colony got wiped out',
            shortText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
            author: 'Johnny',
            posted: '2 hours ago',
            nbComments: 3
        },
        {
            id: 45678,
            previewImage: require('../images/story2.jpg'),
            title: 'The perfect base',
            shortText: "sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
            author: 'Nick',
            posted: '3 days ago',
            nbComments: 2
        }
    ]
});

// ACTIONS
export const appReducer = (state=initialState, action, init=initialState) => {

    if(action.type === TICK_DOWN_TIMER) {
        return Object.assign({}, state, {
            alert: {
                ...state.alert,
                timer: state.alert.timer - 1
            }
        });
    }

    else if(action.type === UPLOAD_IMAGE_SUCCESS) {
        return Object.assign({}, state, {
            currentUser: {
                ...state.currentUser,
                avatarUrl: action.response.currentUser.avatarUrl
            }
        });
    }

    else if(action.type === RESET_PROFILE) {
        return Object.assign({}, state, {
            visitedProfile: init.visitedProfile
        });
    }

    else if(action.type === RESET_USER) {
        return Object.assign({}, state, {
            currentUser: init.currentUser
        });
    }

    else if(action.type === DISPLAY_LOADING) {
        return Object.assign({}, state, {
            loading: action.param
        });
    }

    else if(action.type === TOGGLE_BURGER) {
        return {
            ...state,
            burgerOpen: !state.burgerOpen
        };
    }

    else if(action.type === SET_MESSAGE) {
        return {
            ...state,
            alert: setAlert(action.message, action.messType),
            loading: false
        };
    }

    else if (action.type === FETCH_USER_SUCCESS) {
        if (action.response.isLoggedIn) {
            return Object.assign({}, state, {currentUser: action.response.currentUser});
        } else {
            return Object.assign({}, state, {currentUser: init.currentUser});
        }
    }

    else if (action.type === CHANGE_USERNAME_SUCCESS) {
        return Object.assign({}, state, {
            currentUser: {
                ...state.currentUser,
                username: action.response.currentUser.username
            }
        });
    }

    else if (action.type === FETCH_PROFILE_SUCCESS) {
        return Object.assign({}, state, {
            visitedProfile: action.userProfile
        });
    }

    return state;
};

function setAlert(message, type) {
    let timer;
    if (type === 'alert-message') {
        timer = 5;
    } else if (type === 'error-message') {
        timer = 10;
    } else {
        timer = -1;
    }
    return {
        message,
        timer,
        type
    }
}
