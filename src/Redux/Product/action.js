import * as types from "./actionTypes";
import axios from "axios";


const getData = (page, q) => (dispatch) => {

    let limit = 9;
    dispatch({ type: types.GET_PRODUCT_REQUEST });

    axios
        .get(`https://dell-company-assignment-backend-api-url.vercel.app/product?_page=${page}&_limit=${limit}&q=${q}`)
        .then((res) => {
            // console.log('res: ', res);
            dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data })
        })
        .catch((error) => {
            console.log('error: ', error);
            dispatch({ type: types.GET_PRODUCT_FAILURE });
        })
}

export { getData };