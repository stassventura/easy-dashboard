import GreenMark from '../../components/icons/green-mark';
import { tokens, unclaimedRewards } from '../../lib/constants';

export default function UnclaimedRewards() {
  return (
    <div className="w-full mb-3">
      <div className="flex justify-between items-center">
        <span className="uppercase text-sm text-gray-400 font-medium">Unclaimed rewards in</span>
        <div className="flex items-center">
          {tokens.map((token) => (
            <img src={token.url} alt="" className={token.className} key={token.url} />
          ))}
          <span className="text-gray-500 text-sm ml-2">+4</span>
        </div>
      </div>
      <ul className="flex flex-col gap-3 mt-3">
        {unclaimedRewards.map((item) => (
          <li className="flex justify-between items-center" key={item.key}>
            <span className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <GreenMark />
              {item.key}
            </span>
            <span className="text-sm text-gray-500 font-medium">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
