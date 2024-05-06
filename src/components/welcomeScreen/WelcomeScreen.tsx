'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserData, selectUserDataIncome, selectUserDataName } from '@/redux/slices/userDataSlice';
import { useRouter } from 'next/navigation';
import expenseCategories from '../../app/utils/expense.json';

export const WelcomeScreen = () => {
  const [username, setUsername] = useState('');
  const [income, setIncome] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [incomeError, setIncomeError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userDataUserName = useSelector(selectUserDataName);
  const userDataUserIncome = useSelector(selectUserDataIncome);
  const router = useRouter();

  const dispatch = useDispatch();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const fieldsValidation = () => {
    if (!username.trim()) {
      setUsernameError(true);
      return;
    }
    if (!income.trim()) {
      setIncomeError(true);
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fieldsValidation();
    dispatch(saveUserData({
      username,
      income,
    }));
    setIsLoading(true);
    setTimeout(() => {
      router.push('/home');
    }, 2000);
  };

  useEffect(() => {
    console.log(userDataUserName, userDataUserIncome);

  }, [userDataUserName, userDataUserIncome]);

  console.log(expenseCategories,'expenseCategories')

  return (
    <div className="min-h-screen flex items-center justify-center">
      {!isLoading ? (
        <div className="max-w-md w-full p-8 rounded shadow-lg bg-blue-500">
          <h2 className="text-3xl font-semibold mb-4">Welcome to My Finance Wallet App</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-white">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className={`w-full px-4 py-2 mt-2 text-white bg-gray-200 rounded ${usernameError ? 'border-red-500' : ''}`}
                placeholder="Enter your username"
              />
              {usernameError && <p className="text-red-500 text-sm mt-1">Username is required</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="income" className="block text-white">Income:</label>
              <input
                type="number"
                id="income"
                value={income}
                onChange={handleIncomeChange}
                className={`w-full px-4 py-2 mt-2 text-white bg-gray-200 rounded ${incomeError ? 'border-red-500' : ''}`}
                placeholder="Enter your income"
              />
              {incomeError && <p className="text-red-500 text-sm mt-1">Income is required</p>}
            </div>
            <button type="submit" className="w-full bg-white text-blue-500 font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="flex items-center">
          <svg className="animate-spin h-5 w-5 mr-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm14-2.209A7.962 7.962 0 0120 12h4c0 4.418-3.582 8-8 8v-4zm-2-5.291C18.627 6.727 24 12.1 24 12h-4c0-.904-.373-1.727-1.227-2.291l-2.597 2.597zM11.42 7.013a8.015 8.015 0 00-3.865 1.614l2.597 2.597c.583-.539 1.24-.975 1.79-1.524l-2.522-2.687zM6.88 16.987a7.98 7.98 0 001.736 2.044l2.522-2.687a8.015 8.015 0 00-1.79-1.524l-2.468 2.467zM12 19.999a7.98 7.98 0 002.045-1.736l-2.468-2.467a8.015 8.015 0 00-1.614 3.865l2.597-2.597zm7.013-8.58C17.273 5.373 12.9 0 12 0v4c.904 0 1.727.373 2.291 1.227l2.597 2.597z"></path>
          </svg>
          <span className="text-blue-500">Connecting...</span>
        </div>
      )}
    </div>
  );
};

export default WelcomeScreen;
