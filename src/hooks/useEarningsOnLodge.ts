import { useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import useFrostFinance from './useFrostFinance';
import useRefresh from './useRefresh';

const useEarningsOnLodge = () => {
  const { slowRefresh } = useRefresh();
  const [balance, setBalance] = useState(BigNumber.from(0));
  const frostFinance = useFrostFinance();
  const isUnlocked = frostFinance?.isUnlocked;

  useEffect(() => {
    async function fetchBalance() {
      try {
        setBalance(await frostFinance.getEarningsOnLodge());
      } catch (e) {
        console.error(e);
      }
    }
    if (isUnlocked) {
      fetchBalance();
    }
  }, [isUnlocked, frostFinance, slowRefresh]);

  return balance;
};

export default useEarningsOnLodge;
