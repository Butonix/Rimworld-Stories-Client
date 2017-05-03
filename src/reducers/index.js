import {TOGGLE_BURGER, FETCH_USER_SUCCESS, SET_MESSAGE, FETCH_PROFILE_SUCCESS, DISPLAY_LOADING, TICK_DOWN_TIMER, LOG_OUT_SUCCESS} from '../actions/';

// INITIALIZATION
export const initialState = Object.assign({}, {
    burgerOpen: false,
    loading: false,
    currentUser: {
        id: null,
        userName: null,
        email: null
    },
    alert: {
        timer: 0,
        message: null,
        type: null
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
export const appReducer = (state=initialState, action) => {

    if(action.type === TICK_DOWN_TIMER) {
        return Object.assign({}, state, {
            alert: {
                message: state.alert.message,
                timer: state.alert.timer - 1,
                type: state.alert.type
            }
        });
    }

    if(action.type === DISPLAY_LOADING) {
        return Object.assign({}, state, {
            loading: action.param
        });
    }

    if(action.type === TOGGLE_BURGER) {
        return Object.assign({}, state, {
            burgerOpen: !state.burgerOpen
        });
    }

    if(action.type === LOG_OUT_SUCCESS) {
        return Object.assign({}, state, action.user);
    }

    if(action.type === SET_MESSAGE) {
        let timer;
        if (action.messType === 'alert-message') {
            timer = 5;
        } else if (action.messType === 'error-message') {
            timer = 10;
        } else {
            timer = -1;
        }
        return Object.assign({}, state, {
            alert: {
                message: action.message,
                timer,
                type: action.messType
            },
            loading: false
        });
    }

    else if (action.type === FETCH_USER_SUCCESS) {
        return Object.assign({}, state, action.user);
    }

    else if (action.type === FETCH_PROFILE_SUCCESS) {
        // check if this is your profile or another one
        if (state.currentUser.id === action.userProfile._id) {
            return Object.assign({}, state, {
                visitedProfile: {
                    type: 'mine',
                    username: action.userProfile.username,
                    email: action.userProfile.email,
                }
            });
        } else {
            return Object.assign({}, state, {
                visitedProfile: {
                    type: 'other',
                    username: action.userProfile.username
                }
            });
        }
    }

    return state;
};
