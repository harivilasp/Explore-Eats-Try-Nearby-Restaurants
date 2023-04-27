import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
    user: null,
    role: null,
    customerAuthError: false,
    restaurantAuthError: false,
    adminAuthError: false,
    restaurantUnapprovedError: false,
    custAlreadyExists: false,
    restAlreadyExists: false,
    updateCustError: false,
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
            state.restaurantUnapprovedError = false;
            state.custAlreadyExists = false;
            state.restAlreadyExists = false;
            state.updateCustError = false;
        },
        logout: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = false;
            state.restaurantAuthError = false;
            state.adminAuthError = false;
            state.restaurantUnapprovedError = false;
            state.custAlreadyExists = false;
            state.restAlreadyExists = false;
            state.updateCustError = false;
        },
        customerError: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = true;
            state.restaurantAuthError = false;
            state.adminAuthError = false;
            state.restaurantUnapprovedError = false;
            state.custAlreadyExists = false;
            state.restAlreadyExists = false;
            state.updateCustError = false;
        },
        restaurantError: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = false;
            state.restaurantAuthError = true;
            state.adminAuthError = false;
            state.restaurantUnapprovedError = false;
            state.custAlreadyExists = false;
            state.restAlreadyExists = false;
            state.updateCustError = false;
        },
        adminError: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = false;
            state.restaurantAuthError = false;
            state.adminAuthError = true;
            state.restaurantUnapprovedError = false;
            state.custAlreadyExists = false;
            state.restAlreadyExists = false;
            state.updateCustError = false;
        },
        restUnapprovedError: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = false;
            state.restaurantAuthError = false;
            state.adminAuthError = false;
            state.restaurantUnapprovedError = true;
            state.custAlreadyExists = false;
            state.restAlreadyExists = false;
            state.updateCustError = false;
        },
        customerAlreadyExists: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = false;
            state.restaurantAuthError = false;
            state.adminAuthError = false;
            state.restaurantUnapprovedError = false;
            state.custAlreadyExists = true;
            state.restAlreadyExists = false;
            state.updateCustError = false;
        },
        restaurantAlreadyExists: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = false;
            state.restaurantAuthError = false;
            state.adminAuthError = false;
            state.restaurantUnapprovedError = false;
            state.custAlreadyExists = false;
            state.restAlreadyExists = true;
            state.updateCustError = false;
        },
        customerUpdateError: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = false;
            state.restaurantAuthError = false;
            state.adminAuthError = false;
            state.restaurantUnapprovedError = false;
            state.custAlreadyExists = false;
            state.restAlreadyExists = false;
            state.updateCustError = true;
        },
        customerUpdateProfile: (state, action) => {
            state.user.user.name = action.payload.name;
            state.user.user.phoneNumber = action.payload.phoneNumber;
        },
        reset: (state) => {
            state.user = null;
            state.role = null;
            state.customerAuthError = false;
            state.restaurantAuthError = false;
            state.adminAuthError = false;
            state.restaurantUnapprovedError = false;
            state.custAlreadyExists = false;
            state.restAlreadyExists = false;
            state.updateCustError = false;
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
    restUnapprovedError,
    restaurantAlreadyExists,
    customerAlreadyExists,
    customerUpdateError,
    customerUpdateProfile,
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
        let response;
        try {
            response = await axios.post(`${BASE_URL}/api/restaurants/login`, {
                username,
                password,
            });
            const userData = response.data;
            dispatch(login({ user: userData, role: "restaurant" }));
            navigateTo("/");
        } catch (e) {
            const error = e.response.data;
            if (error.errorType === "INVALID_CREDS") dispatch(restaurantError());
            else if (error.errorType === "RESTAURANT_UNAPPROVED")
                dispatch(restUnapprovedError());
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
        } catch (e) {
            dispatch(adminError());
        }
    };
};

export const registerCustomerWithAPI = (payload, navigateTo) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/customers`, payload);
            const registrationData = response.data;
            dispatch(login({ user: registrationData, role: "customer" }));
            navigateTo("/");
        } catch (e) {
            const error = e.response.data;
            if (error.errorType === "CUSTOMER_EXISTS")
                dispatch(customerAlreadyExists());
        }
    };
};

export const registerRestaurantWithAPI = (payload, navigateTo) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/restaurants`, payload);
            // const registrationData = response.data;
            navigateTo("/login");
        } catch (e) {
            const error = e.response.data;
            if (error.errorType === "RESTAURANT_EXISTS")
                dispatch(restaurantAlreadyExists());
        }
    };
};

export const updateMeWithAPI = (payload, navigateTo, token) => {
    return async (dispatch) => {
        try {
            console.log({ token });
            const response = await axios.post(
                `${BASE_URL}/api/customers/profile`,
                payload,
                {
                    headers: {
                        Authorization: "Bearer " + token, // replace `token` with your actual token
                        "Content-Type": "application/json",
                    },
                }
            );
            dispatch(
                customerUpdateProfile({
                    name: payload.name,
                    phoneNumber: payload.phoneNumber,
                })
            );
            navigateTo("/customer-profile");
        } catch (e) {
            dispatch(customerUpdateError());
        }
    };
};
