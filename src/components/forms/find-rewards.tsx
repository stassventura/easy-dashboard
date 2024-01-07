import Input from '../ui/input';
import Button from '../ui/button';
import Dollar from '../icons/dollar';

interface FindRewardsProps {
  onSumbit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

export default function FindRewards({ onSumbit, loading }: FindRewardsProps) {
  return (
    <form className="flex flex-col gap-3 items-center py-6 px-6 md:px-0" onSubmit={onSumbit}>
      <p className="flex gap-1/2 items-center text-[#616b84]">
        <Dollar />
        <span className="uppercase font-medium">
          {loading ? <>Please wait...</> : <>Find unclaimed rewards</>}
        </span>
      </p>
      <Input
        name="wallet"
        placeholder="Ethereum address / ENS"
        className="text-center placeholder-center border-gray-100"
      />
      <Button className="font-bold text-base w-fit px-3 m-0" disabled={loading} spinner>
        Check for reward
      </Button>
    </form>
  );
}
