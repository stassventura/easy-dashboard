import Congrats from '../../components/icons/congrats';
import ClaimCard from './claim-card';
import UnclaimedRewards from './unclaimed-rewards';

export default function ClaimPage() {
  return (
    <div className="flex flex-col w-full rounded-t-md overflow-hidden">
      <div className="mx-3 xs:px-6 flex flex-col items-center gap-2 mt-4">
        <Congrats />
        <h1 className="text-2xl font-bold text-[#0c132b] text-center">
          Found (15) unclaimed rewards
        </h1>
        <p className="text-sm font-medium text-gray-500 opacity-90">
          You will be able to claim your tokens
        </p>
        <ClaimCard />
        <UnclaimedRewards />
      </div>
    </div>
  );
}
