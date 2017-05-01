import {TOGGLE_BURGER, FETCH_USER_SUCCESS} from '../actions/';

// INITIALIZATION
export const initialState = Object.assign({}, {
    apiUrl: 'http://localhost:8080',
    opts: {
        burgerOpen: false
    },
    currentUser: {
        id: null,
        userName: null,
        email: null
    },
    message: null,
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

    if(action.type === TOGGLE_BURGER) {
        return Object.assign({}, state, {
            opts: {
                burgerOpen: !state.opts.burgerOpen
            }
        });
    }

    else if (action.type === FETCH_USER_SUCCESS) {
        return Object.assign({}, state, action.user);
    }

    return state;
};
