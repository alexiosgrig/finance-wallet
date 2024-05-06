// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import  userDataReducer  from '@/redux/slices/userDataSlice';

export const store = configureStore({
  reducer: {
    userData: userDataReducer
  },
});
