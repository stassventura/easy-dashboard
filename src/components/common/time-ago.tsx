import { differenceInMinutes, differenceInSeconds } from 'date-fns';

function getTimeAgoText(timestamp: string) {
  const now = new Date();
  const transactionDate = new Date(timestamp);
  const secondsDiff = differenceInSeconds(now, transactionDate);

  if (secondsDiff < 3) return 'now';
  if (secondsDiff < 60) return `${secondsDiff} sec ago`;
  if (secondsDiff < 100) return `${differenceInMinutes(now, transactionDate)} min ago`;
}

export default function TimeAgo({ timestamp }: { timestamp: string }) {
  return <span className="text-xs text-gray-500">{getTimeAgoText(timestamp)}</span>;
}
