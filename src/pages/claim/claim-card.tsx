import useClaim from '../../hooks/useClaim';
import Etherium from '../../components/icons/etherium';
import Button from '../../components/ui/button';

export default function ClaimCard() {
  const { claim } = useClaim();
  return (
    <div className="rounded-md border border-orange-500 w-full p-4 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center mt-1">
        <div className="flex flex-col gap-1/2 ">
          <p className="text-gray-700 w-full md:w-fit font-medium opacity-95 text-sm  text-center">
            <span className="block md:inline-block"> {claim?.hash} </span>
            will receive
          </p>
          <p className="flex items-center gap-2 mx-auto md:mx-0 mt-1 md:mt-0">
            <span className="text-2xl font-bold text-orange-500">{claim?.cryptoAmount}</span>
            <Etherium />
          </p>
          <p className="text-sm text-gray-500 opacity-90  mx-auto md:mx-0 mt-1 md:mt-0">
            ${claim?.dollarAmount}
          </p>
        </div>
        <Button className="w-fit px-4 text-base mt-4 md:mt-0">Start claim process</Button>
      </div>
    </div>
  );
}
