import { selectUserDataIncome, selectUserDataName } from '@/redux/slices/userDataSlice';
import { useSelector } from 'react-redux';

export const Header = () => {

  const userDataUserName = useSelector(selectUserDataName);
  const userDataUserIncome = useSelector(selectUserDataIncome);

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white shadow-lg text-gray-800">
      <div className="text-sm text-blue-300 hover:text-blue-600 transition-colors duration-300 hidden md:block">My Finance Wallet</div> {/* Hidden on small screens */}
      <div className="text-lg font-bold">
        <span className="text-blue-300 hover:text-blue-600 transition-colors duration-300">Total Income: {userDataUserIncome}</span>
        <span className="ml-4">{`Greetings ${userDataUserName}`}</span>
      </div>
    </header>



  );
};