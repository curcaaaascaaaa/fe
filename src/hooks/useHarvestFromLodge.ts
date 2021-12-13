import { useCallback } from 'react';
import useFrostFinance from './useFrostFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useHarvestFromLodge = () => {
  const frostFinance = useFrostFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(frostFinance.harvestCashFromLodge(), 'Claim FROST from Lodge');
  }, [frostFinance, handleTransactionReceipt]);

  return { onReward: handleReward };
};

export default useHarvestFromLodge;
