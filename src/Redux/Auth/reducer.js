import * as types from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    auth: null
}


// action = { type, payload };

const reducer = ( state = initState, { type, payload }) => {
    switch (type) {

        // user registration states
        case types.REGISTER_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case types.REGISTER_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        case types.REGISTER_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        // user login states
        case types.LOGIN_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case types.LOGIN_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                auth: payload,
                isError: false
            }
        case types.LOGIN_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        // default state
        default:
            return state;
    }
}


export { reducer };
