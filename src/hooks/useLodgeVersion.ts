import { useCallback, useEffect, useState } from 'react';
import useFrostFinance from './useFrostFinance';
import useStakedBalanceOnLodge from './useStakedBalanceOnLodge';

const useLodgeVersion = () => {
  const [lodgeVersion, setLodgeVersion] = useState('latest');
  const frostFinance = useFrostFinance();
  const stakedBalance = useStakedBalanceOnLodge();

  const updateState = useCallback(async () => {
    setLodgeVersion(await frostFinance.fetchLodgeVersionOfUser());
  }, [frostFinance?.isUnlocked, stakedBalance]);

  useEffect(() => {
    if (frostFinance?.isUnlocked) {
      updateState().catch((err) => console.error(err.stack));
    }
  }, [frostFinance?.isUnlocked, stakedBalance]);

  return lodgeVersion;
};

export default useLodgeVersion;
