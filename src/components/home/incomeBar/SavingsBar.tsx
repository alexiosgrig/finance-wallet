import { selectUserDataExpenses, selectUserDataIncome } from '@/redux/slices/userDataSlice';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export const SavingsBar = () => {

  const userDataUserIncome = useSelector(selectUserDataIncome);
  const userDataUserExpenses = useSelector(selectUserDataExpenses);


  const savings = useMemo(() => {
      const incomeAfterExpenses = userDataUserIncome - userDataUserExpenses;
      const saving = incomeAfterExpenses / userDataUserIncome;
      return saving * 100;
    }
    , [userDataUserIncome, userDataUserExpenses]);

  return (
    <div className="flex justify-center mt-4">
      <div className="w-full max-w-screen-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Savings Bar</h2>
        <div className="flex items-center">
          <div className="w-16 text-right mr-2">{`${savings.toFixed(2)} %`}</div>
          <div className="flex-1 h-8 bg-gray-200 rounded-full">
            <div
              className="h-full rounded-full bg-blue-500"
              style={{ width: `${savings}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};