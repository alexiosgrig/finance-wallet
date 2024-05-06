'use client';
import { selectUserDataIncome } from '@/redux/slices/userDataSlice';
import { useSelector } from 'react-redux';
import { Header } from '@/components/home/header/Header';
import { SavingsBar } from '@/components/home/incomeBar/SavingsBar';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ExpensesField } from '@/components/home/expensesField/ExpensesField';


export default function Home() {
  const router = useRouter();
  const userDataUserIncome = useSelector(selectUserDataIncome);

  const isIncomeAvailable = useMemo(() => {
    return userDataUserIncome === null;
  }, [userDataUserIncome]);

  useEffect(() => {
    if (isIncomeAvailable) {
      router.push('/');
    }
  }, [userDataUserIncome, isIncomeAvailable, router]);
  return (
    <>
      {!isIncomeAvailable && (
        <>
          <Header />
          <SavingsBar />
          <div className="flex flex-col items-center justify-center">
            <ExpensesField />
          </div>
        </>
      )}
    </>
  );

}
