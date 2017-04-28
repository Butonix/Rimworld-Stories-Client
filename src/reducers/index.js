import {TOGGLE_BURGER} from '../actions/';

// INITIALIZATION
export const initialState = Object.assign({}, {
    opts: {
        burgerOpen: false
    },
    currentUser: {
        id: 123456789,
        userName: 'Nico',
        email: 'nicoma63@gmail.com'
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

    if(action.type === TOGGLE_BURGER) {
        return Object.assign({}, state, {
            opts: {
                burgerOpen: !state.opts.burgerOpen
            }
        });
    }

    return state;
};
