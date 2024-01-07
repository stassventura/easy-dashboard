import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { currencyIcons, currencyRates, hashIcons } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidAddress(address: string) {
  return new Promise((resolve) => {
    const randomDelay = Math.random() * (3500 - 400) + 400;

    setTimeout(() => {
      const isValid = /^0x[a-fA-F0-9]{40}$/.test(address);
      resolve(isValid);
    }, randomDelay);
  });
}

export function getRandomCurrency() {
  const currencies = Object.keys(currencyRates);
  return currencies[Math.floor(Math.random() * currencies.length)];
}

export function convertDollarsToCrypto(dollarAmount: number, currency?: string) {
  const targetCurrency = currency || getRandomCurrency();
  const amountInCrypto = parseFloat(
    (dollarAmount / currencyRates[targetCurrency as keyof typeof currencyRates]).toFixed(3),
  );
  return {
    currency: targetCurrency,
    amountInCrypto,
    dollarAmount: dollarAmount.toFixed(3),
  };
}

export function getShortHash(hash: string) {
  return `${hash.slice(0, 6)}...${hash.slice(-4)}`;
}
export function generateRandomHash() {
  const fullHash =
    '0x' + [...Array(40)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  return fullHash;
}

export function generateRandomDollarAmount() {
  const isLessThanThousand = Math.random() < 0.3;
  if (isLessThanThousand) {
    return (Math.random() * 900 + 100).toFixed(3);
  }
  return (Math.random() * 5000 + 1000).toFixed(3);
}

export function formatDollarAmount(amount: number) {
  return Number(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function getRandomHashIcon() {
  const randomIndex = Math.floor(Math.random() * hashIcons.length);
  return hashIcons[randomIndex];
}

export const generateTransaction = () => {
  const dollarAmount = generateRandomDollarAmount();

  const { currency, amountInCrypto } = convertDollarsToCrypto(Number(dollarAmount));
  const icon = currencyIcons[currency as keyof typeof currencyIcons];
  const hash = generateRandomHash();
  const data = {
    hash,
    amountInCrypto,
    currency,
    dollarAmount,
    icon,
    hashIcon: getRandomHashIcon(),
    timestamp: new Date().toISOString(),
  };
  return data;
};

export function generateRandomClaimAmount() {
  const randomAmount = Math.random() * (9000 - 3000) + 3000;
  return +randomAmount.toFixed(3);
}
