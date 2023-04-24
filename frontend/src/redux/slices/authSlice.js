import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

const initialState = {
    user: null,
    role: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.user = null;
            state.role = null;
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer

export const signInWithAPICustomer = (username, password) => {
    return async dispatch => {
        const response = await axios.post(`${BASE_URL}/api/customers/login`, {
            username,
            password
        })
        const userData = response.data
        dispatch(login({ user: userData, role: "customer" }));
    }
}
export const signInWithAPIRestaurant = (username, password) => {
    return async dispatch => {
        const response = await axios.post(`${BASE_URL}/api/restaurants/login`, {
            username,
            password
        })
        const userData = response.data
        dispatch(login({ user: userData, role: "restaurant" }));
    }
}
export const signInWithAPIAdmin = (username, password) => {
    return async dispatch => {
        const response = await axios.post(`${BASE_URL}/api/admins/login`, {
            username,
            password
        })
        const userData = response.data
        dispatch(login({ user: userData, role: "admin" }));
    }
}