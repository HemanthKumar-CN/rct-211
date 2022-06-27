//Create ActionCreator functions here

import axios from "axios"
import { GET_SHOES_FAILURE, GET_SHOES_SUCCESS } from "./actionTypes"

export const getShoesSuccess = (payload) => {
    return {
        type: GET_SHOES_SUCCESS,
        payload
    }
}

export const getShoesFailure =()=> {
    return {
        type: GET_SHOES_FAILURE
    }
}


export const getShoes=()=>(dispatch)=> {
    axios.get("http://localhost:8080/shoes")
    .then(r=> {
        dispatch({type:GET_SHOES_SUCCESS, payload: r.data})
    })
}