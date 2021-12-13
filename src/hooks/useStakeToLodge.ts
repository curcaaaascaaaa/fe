import { useCallback } from 'react';
import useFrostFinance from './useFrostFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useStakeToLodge = () => {
  const frostFinance = useFrostFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      handleTransactionReceipt(frostFinance.stakeShareToLodge(amount), `Stake ${amount} FSHARE to the lodge`);
    },
    [frostFinance, handleTransactionReceipt],
  );
  return { onStake: handleStake };
};

export default useStakeToLodge;
