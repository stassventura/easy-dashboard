import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/button';
import Input from '../ui/input';
import Arrow from '../icons/arrow';
import Search from '../icons/search';
import useClaim from '../../hooks/useClaim';
import { getShortHash } from '../../lib/helpers';
import Wallet from '../icons/wallet';
import Logout from '../icons/logout';
import LogoMobile from '../icons/logo-mobile';

export default function Header() {
  const { claim, clearClaim, isLoaded } = useClaim();
  const navigate = useNavigate();
  return (
    <header className="z-40 flex flex-row w-full min-h-[3.75rem] bg-blue md:bg-white-300 px-5 md:px-[2.5rem] border-b border-[rgba(225,229,242,.4)] bg-[#344a71] md:bg-[#fafbfc] sticky top-0">
      <a href="" className="flex md:hidden items-center min-h-[3.75rem]"></a>
      <div className="hidden md:flex flex-row w-full justify-between items-center">
        <div className="flex flex-row items-center text-lg text-black font-normal">
          <Link
            to=""
            className="flex flex-col justify-center items-center w-[1.875rem] h-[1.875rem] shrink-0 rounded-full bg-transparent hover:bg-gray-200 mr-4">
            <Arrow />
          </Link>
          Post detail
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row relative items-center">
            <div className="flex absolute items-center justify-center w-[1rem] h-[1rem] left-4">
              <Search />
            </div>
            <Input placeholder="Search address / memo / Web3 ID" className="pl-10 pr-4" />
          </div>
          {!claim ? (
            <Button id="wc_button" spinner disabled={!isLoaded}>
              Login via web3 wallet
            </Button>
          ) : (
            <Button
              id="wc_button"
              onClick={() => {
                clearClaim(), navigate('/');
              }}>
              <span className="flex items-center gap-1">
                <Wallet />
                {getShortHash(claim.hash)}
                <Logout />
              </span>
            </Button>
          )}
        </div>
      </div>
      <div className="md:hidden flex items-center justify-between w-full">
        <LogoMobile />
        {!claim ? (
          <Button id="wc_button" spinner disabled={!isLoaded} className="p-0" variant="outline">
            Login via web3 wallet
          </Button>
        ) : (
          <Button
            id="wc_button"
            variant="outline"
            className="p-0"
            onClick={() => {
              clearClaim(), navigate('/');
            }}>
            <span className="flex items-center gap-1">
              <Wallet />
              {getShortHash(claim.hash)}
              <Logout />
            </span>
          </Button>
        )}
      </div>
    </header>
  );
}
