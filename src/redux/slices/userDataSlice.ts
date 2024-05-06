import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData } from '@/app/types/IUserData';

interface UserDataState {
  username: string | null;
  income: number | null;
  expenses: number | null;
}

const initialState: UserDataState = {
  username: null,
  income: null,
  expenses: null,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    saveUserData: (state, action: PayloadAction<IUserData>) => {
      const { username, income } = action.payload;
      state.username = username;
      state.income = income;
    },
    addTotalExpenses: (state, action: PayloadAction<number>) => {
      state.expenses = action.payload;
    },
    clearTotalExpenses: (state) => {
      state.expenses = null;
    },
  },
});

export const { saveUserData, addTotalExpenses,clearTotalExpenses } = userDataSlice.actions;

export const selectUserDataName = (state: any): string | null =>
  state.userData.username;

export const selectUserDataIncome = (state: any): number | null =>
  state.userData.income;

export const selectUserDataExpenses = (state: any): number | null =>
  state.userData.expenses;

export default userDataSlice.reducer;
