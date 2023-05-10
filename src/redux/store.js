import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../redux/user/userSlice';

const store = configureStore ({
    reducer: {
        user: usersReducer,
    }
})

export default store;

