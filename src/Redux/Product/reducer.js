import * as types from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    data: []
}

// action = { type, payload };

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case types.GET_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case types.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload
            }
        case types.GET_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state;
    }
}


export { reducer };