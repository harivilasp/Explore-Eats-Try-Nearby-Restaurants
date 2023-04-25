import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
    user: null,
    role: null,
    customerAuthError: false,
    restaurantAuthError: false,
    adminAuthError: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.role = action.payload.role;
            state.customerAuthError = false;
            state.restaurantAuthError = false;
            state.adminAuthError = false;
        },
        logout: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = false;
            state.restaurantAuthError = false;
            state.adminAuthError = false;
        },
        customerError: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = true;
            state.restaurantAuthError = false;
            state.adminAuthError = false;
        },
        restaurantError: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = false;
            state.restaurantAuthError = true;
            state.adminAuthError = false;
        },
        adminError: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = false;
            state.restaurantAuthError = false;
            state.adminAuthError = true;
        },
        reset: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = false;
            state.restaurantAuthError = false;
            state.adminAuthError = false;
        },
    },
});

export const {
    login,
    logout,
    customerError,
    restaurantError,
    reset,
    navigateTo,
    adminError,
} = authSlice.actions;
export default authSlice.reducer;

export const signInWithAPICustomer = (username, password, navigateTo) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/customers/login`, {
                username,
                password,
            });
            const userData = response.data;
            dispatch(login({ user: userData, role: "customer" }));
            navigateTo("/");
        } catch (e) {
            dispatch(customerError());
        }
    };
};
export const signInWithAPIRestaurant = (username, password, navigateTo) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/restaurants/login`, {
                username,
                password,
            });
            const userData = response.data;
            dispatch(login({ user: userData, role: "restaurant" }));
            navigateTo("/");
        } catch (e) {
            dispatch(restaurantError());
        }
    };
};
export const signInWithAPIAdmin = (username, password, navigateTo) => {
    return async (dispatch) => {
        try {
        const response = await axios.post(`${BASE_URL}/api/admins/login`, {
            username,
            password,
        });
        const userData = response.data;
        dispatch(login({ user: userData, role: "admin" }));
        navigateTo("/");
    } catch(e) {
        dispatch(adminError());
    }
    };
};

export const registerCustomerWithAPI = (payload) => {
    return async (dispatch) => {
        const response = await axios.post(`${BASE_URL}/api/customers`, payload);
        const registrationData = response.data;
        dispatch(login({ user: registrationData, role: "customer" }));
    };
};

export const registerRestaurantWithAPI = (payload) => {
    return async (dispatch) => {
        const response = await axios.post(`${BASE_URL}/api/restaurants`, payload);
        const registrationData = response.data;
        dispatch(login({ user: registrationData, role: "restaurant" }));
    };
};

