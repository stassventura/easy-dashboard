import { Link } from 'react-router-dom';
import Logo from '../icons/logo';
import OpenApi from '../icons/open-api';
import Settings from '../icons/settings';
import Home from '../icons/home';
import Message from '../icons/message';
import Stream from '../icons/stream';
import Rewards from '../icons/rewards';
import More from '../icons/more';
import { cn } from '../../lib/helpers';

const navItems = [
  {
    name: 'Home',
    icon: <Home />,
    link: '/',
  },
  {
    name: 'Hi',
    icon: <Message />,
    link: '/',
  },
  {
    name: 'Stream',
    icon: <Stream />,
    link: '/',
  },
  {
    name: 'Rewards',
    icon: <Rewards />,
    link: '/',
  },
  {
    name: 'More',
    icon: <More />,
    link: '/',
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden xl:flex flex-col sticky top-0 left-0 justify-between h-screen min-w-[13.75rem] pt-[1.25rem] pr-0 pb-4 pl-8 overflow-auto shadow-sm">
      <div className="flex flex-col w-full">
        <Link to="">
          <Logo />
        </Link>
        <nav className="flex flex-col w-full mt-[3rem]">
          {navItems.map((item) => (
            <Link
              to={item.link}
              key={item.name}
              className={cn(
                'flex flex-row items-center text-md font-medium font-lato opacity-60 hover:opacity-100 [&:not(:first-child)]:mt-[30px]',
                item.name === 'Rewards' && 'border-r-4 border-orange-500 opacity-100 cursor-auto',
              )}>
              <div className="flex items-center justify-center w-[1.5rem] h-[1.5rem] shrink-0 mr-4 ">
                {item.icon}
              </div>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-col w-full">
        <div className="my-[1.875rem] mr-[2rem] ml-0 bg-[rgba(225,229,242,.8)] h-[0.063rem]"></div>
        <Link
          to=""
          className="flex flex-row items-center text-[0.813rem] font-medium font-lato opacity-60 hover:opacity-100">
          <div className="flex items-center justify-center w-[1.5rem] h-[1.5rem] shrink-0 mr-4">
            <OpenApi />
          </div>
          OpenAPI
        </Link>
        <Link
          to=""
          className="flex flex-row items-center text-[0.813rem] font-medium font-lato opacity-60 hover:opacity-100 mt-4">
          <div className="flex items-center justify-center w-[1.5rem] h-[1.5rem] shrink-0 mr-4">
            <Settings />
          </div>
          Settings
        </Link>

        <div className="flex flex-col w-full mt-[1.125rem]">
          <Link to="" className="dbank-label-img flex w-full h-[4.25rem] max-w-[9.75rem]" />
        </div>
      </div>
    </aside>
  );
}
