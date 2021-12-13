import { useEffect, useState } from 'react';
import useFrostFinance from './useFrostFinance';
import useRefresh from './useRefresh';

const useFetchLodgeAPR = () => {
  const [apr, setApr] = useState<number>(0);
  const frostFinance = useFrostFinance();
  const { slowRefresh } = useRefresh();

  useEffect(() => {
    async function fetchLodgeAPR() {
      try {
        setApr(await frostFinance.getLodgeAPR());
      } catch (err) {
        console.error(err);
      }
    }
    fetchLodgeAPR();
  }, [setApr, frostFinance, slowRefresh]);

  return apr;
};

export default useFetchLodgeAPR;
