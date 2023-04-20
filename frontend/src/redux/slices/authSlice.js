import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

const initialState = {
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
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
        dispatch(login(userData))
    }
}
export const signInWithAPIRestaurant = (username, password) => {
    return async dispatch => {
        const response = await axios.post(`${BASE_URL}/api/restaurants/login`, {
            username,
            password
        })
        const userData = response.data
        dispatch(login(userData))
    }
}
