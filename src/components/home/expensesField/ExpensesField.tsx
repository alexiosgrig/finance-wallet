'use client';

import React, { useEffect, useState } from 'react';
import { expense_categories } from '../../../app/utils/expense.json';
import { addTotalExpenses, clearTotalExpenses } from '@/redux/slices/userDataSlice'; // Adjust the path as per your directory structure
import { useDispatch } from 'react-redux';

interface IExpensesCategories {
  category: string | undefined;
  expenses: string | undefined;
}

export const ExpensesField = () => {
  const [categories, setCategories] = useState<IExpensesCategories[]>([{ category: undefined, expenses: undefined }]);
  const dispatch = useDispatch();

  const handleCategoryChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCategories = [...categories];
    updatedCategories[index] = { ...updatedCategories[index], [name]: value };
    setCategories(updatedCategories);
  };

  const addCategory = () => {
    setCategories([...categories, { category: undefined, expenses: undefined }]);
  };

  const removeCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const calculateTotalExpenses = (expensesArray) => {
    return expensesArray.reduce((total, expense) => {
      return total + parseFloat(expense.expenses);
    }, 0);
  };

  const saveExpenses = () => {
    console.log(calculateTotalExpenses(categories), 'categories');
    const totalExpenses = calculateTotalExpenses(categories);
    dispatch(addTotalExpenses(totalExpenses));
  };

  useEffect(() => {
    return () => {
      dispatch(clearTotalExpenses());
    };
  }, [dispatch]);


  console.log(categories, 'categories');
  return (
    <div className="mb-4">
      <label htmlFor="expenses" className="block text-gray-700">Enter expenses:</label>
      {categories.map((category, index) => (
        <div key={index} className="flex items-center mb-2">
          <select
            name="name"
            value={category.category}
            onChange={(e) => handleCategoryChange(index, e)}
            className="w-48 px-2 py-1 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">-- Select category --</option>
            {expense_categories.map((category, index) => (
              <option key={index} value={category.category}>{category.category}</option>
            ))}
          </select>
          <input
            type="number"
            name="expenses"
            placeholder="Expenses"
            value={category.expenses}
            onChange={(e) => handleCategoryChange(index, e)}
            className="w-20 px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeCategory(index)}
              className="ml-2 text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={addCategory}
          className="px-4 py-2 mr-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Field
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={saveExpenses}
        >
          Save
        </button>
      </div>
    </div>
  );
};
