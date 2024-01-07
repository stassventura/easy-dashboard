import MarkSuccess from '../icons/mark-success';

export default function RewardMark() {
  return (
    <div className="flex flex-row gap-1 items-center h-[2rem] text-xs font-medium text-blue-500 pr-2 pl-4 py-0 rounded-ee-lg border-b border-r border-orange-400 w-fit bg-[#edebf5]">
      <MarkSuccess />
      <span className="font-bold">DeBank reward searcher</span>
    </div>
  );
}
