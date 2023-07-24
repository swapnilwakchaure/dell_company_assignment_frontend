import * as types from "./actionTypes";
import axios from "axios";



const register = (details) => (dispatch) => {

    dispatch({ type: types.REGISTER_POST_REQUEST });

    axios
        .post('https://dell-company-assignment-backend-api-url.vercel.app/auth/register', details)
        .then((res) => {
            // console.log('res: ', res);
            alert(res.data.message);
            dispatch({ type: types.REGISTER_POST_SUCCESS });
        })
        .catch((error) => {
            console.log('error: ', error);
            dispatch({ type: types.REGISTER_POST_FAILURE });
        })
}


const login = (details) => (dispatch) => {

    dispatch({ type: types.LOGIN_POST_REQUEST });

    axios
        .post('https://dell-company-assignment-backend-api-url.vercel.app/auth/login', details)
        .then((res) => {
            // console.log('res: ', res);
            alert(res.data.message);
            {
                res.data.data &&
                dispatch({ type: types.LOGIN_POST_SUCCESS, payload: res.data.data });
            }
        })
        .catch((error) => {
            console.log('error: ', error);
            dispatch({ type: types.REGISTER_POST_FAILURE });
        })
}


export { register, login };
