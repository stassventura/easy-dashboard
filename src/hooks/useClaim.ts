import { useLocalStorage } from '@mantine/hooks';
import { convertDollarsToCrypto, generateRandomClaimAmount } from '../lib/helpers';
import { useEffect, useState } from 'react';

interface Claim {
  hash: string;
  cryptoAmount: number;
  dollarAmount: number;
}

export default function useClaim() {
  const [claim, setClaim] = useLocalStorage<Claim | null>({
    key: 'claim',
    defaultValue: null,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, [claim]);

  const createClaim = (hash: string) => {
    const dollarAmount = generateRandomClaimAmount();
    const { amountInCrypto } = convertDollarsToCrypto(dollarAmount, 'ETH');
    const newClaim = {
      hash,
      cryptoAmount: amountInCrypto,
      dollarAmount: dollarAmount,
    };
    setClaim(newClaim);
  };

  const clearClaim = () => {
    setClaim(null);
  };

  return { claim, createClaim, clearClaim, isLoaded };
}
