export const TOGGLE_BURGER = 'TOGGLE_BURGER';
export const toggleBurger = () => ({
    type: TOGGLE_BURGER
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = user => ({
    type: FETCH_USER_SUCCESS,
    user
});

export const fetchUser = () => dispatch => {
    console.log('fetching user');
    fetch('http://localhost:8080/auth/get-user').then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(user => {
        dispatch(fetchUserSuccess(user));
    });
};
/*
export const fetchBoard = () => dispatch => {
    dispatch(fetchBoardRequest());
    fetch('/board').then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(board => {
        dispatch(fetchBoardSuccess(board));
    }).catch(err => {
        dispatch(fetchBoardError(err));
    });
};*/
