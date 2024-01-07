import { getShortHash, cn } from '../../lib/helpers';
import { formatDollarAmount } from '../../lib/helpers';
import useTransactions from '../../hooks/useTransactions';
import TimeAgo from './time-ago';
import { motion } from 'framer-motion';

export default function Transactions() {
  const transactions = useTransactions();

  const getPriceString = (amountInCrypto: number, currency: string, dollarAmount: number) => {
    return `+${formatDollarAmount(amountInCrypto)} ${currency} ($${formatDollarAmount(
      dollarAmount,
    )})`;
  };
  return (
    <div className="">
      <h1 className="text-xl font-bold text-[#0c132b] px-3 md:px-5 mt-4">
        Transactions <span className="text-gray-500 font-normal">(178)</span>
      </h1>
      <ul className="mt-4 grid grid-cols-1 divide-y">
        {transactions.map((transaction) => (
          <motion.li
            initial={{ background: 'rgba(187, 247, 208, 0.5)' }}
            animate={{ background: '#FFF' }}
            transition={{ duration: 1 }}
            key={transaction.hash}
            className={cn(
              'flex flex-col md:flex-row md:items-center w-full py-3 hover:bg-slate-100/60 px-3 md:px-5 transition-colors duration-300',
            )}>
            <div className="flex-1 flex md:flex-1 flex-row md:flex-col gap-1 order-last md:order-first  justify-between mt-3 md:mt-0 pl-1 md:pl-0">
              <TimeAgo timestamp={transaction.timestamp} />

              <span className="flex items-center gap-1" title={transaction.hash}>
                <img src={transaction.hashIcon} alt={transaction.currency} className="w-4 h-4" />
                <span className="text-xs font-normal">{getShortHash(transaction.hash)}</span>
              </span>
            </div>
            <div className="flex-1 flex items-center gap-4 order-1 md:order-2 md:gap-2">
              <img
                src="https://imagedelivery.net/cz_UvcNIMpTD7yBb6Go13A/0aa4dc2f-31fc-431c-b8d2-1301a0c7f800/public"
                alt=""
                className="w-7 h-7"
              />
              <div className="flex flex-col gap-1/2">
                <span className="text-xs text-gray-500">Claim reward</span>
                <span className="text-xs">Contract interaction</span>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-4 order-2 md:order-3 md:gap-2 mt-3 md:mt-0">
              <img
                src={transaction.icon}
                alt={transaction.currency}
                className="w-7 h-7 rounded-full"
              />
              <span className="text-green-300 text-sm">
                {getPriceString(
                  Number(transaction.amountInCrypto),
                  transaction.currency,
                  Number(transaction.dollarAmount),
                )}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
