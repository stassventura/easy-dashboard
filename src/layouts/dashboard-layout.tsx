import React from 'react';
import Sidebar from '../components/common/sidebar';
import Header from '../components/common/header';
import { Toaster } from 'react-hot-toast';
import Fire from '../components/icons/fire';
import RewardMark from '../components/common/reward-mark';
import Transactions from '../components/common/transactions';
import Footer from '../components/common/footer';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper font-lato {{random}}">
      <div className="flex flex-row w-full items-stretch">
        <Sidebar />
        <main className="flex flex-col w-full bg-[#f0f3f7]">
          <Header />
          <div
            className="flex flex-row justify-between w-full lg:w-[60rem] md:my-8
            mx-auto confetti-wrapper md:min-h-[calc(100vh_-_220px)]">
            <div className="flex flex-col w-full h-fit pb-6 shadow-lg bg-white rounded-none md:rounded-md">
              <div>
                <div className="pt-4 md:pt-6 px-3 md:px-5">
                  <div className="border border-orange-400 rounded-md overflow-hidden">
                    <div className="card">
                      <RewardMark />
                      {children}
                    </div>
                    <p className="flex flex-row items-center bg-white/75 justify-between h-[2.5rem] px-[0.75rem] text-xs text-gray-500">
                      <span>52 networks</span>
                      <span className="flex items-center">
                        <Fire />
                        1000+ users already claimed
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <Transactions />
            </div>
          </div>
          <Footer />
        </main>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
