'use client';
import { selectUserDataIncome } from '@/redux/slices/userDataSlice';
import { useSelector } from 'react-redux';
import { SavingsBar } from '@/components/home/incomeBar/SavingsBar';
import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';


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
          <SavingsBar />
      )}
    </>
  );

}
