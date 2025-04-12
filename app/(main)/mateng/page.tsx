'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/footer/Footer';

export default function Page() {
  const [parcels, setParcels] = useState(0);
  const [merchants, setMerchants] = useState(0);
  const [businesses, setBusinesses] = useState(0);

  useEffect(() => {
    const targetParcels = 30000;
    const targetMerchants = 150;
    const targetBusinesses = 70;

    const startParcels = 10000;
    const startMerchants = 50;
    const startBusinesses = 10;

    const stepsParcels = targetParcels - startParcels;
    const stepsMerchants = targetMerchants - startMerchants;
    const stepsBusinesses = targetBusinesses - startBusinesses;

    const maxSteps = Math.max(
      stepsParcels / 750,
      stepsMerchants / 5,
      stepsBusinesses / 2
    );

    const parcelIncrement = Math.ceil(stepsParcels / maxSteps);
    const merchantIncrement = Math.ceil(stepsMerchants / maxSteps);
    const businessIncrement = Math.ceil(stepsBusinesses / maxSteps);

    const interval = setInterval(() => {
      setParcels((prev) => (prev < targetParcels ? prev + parcelIncrement : targetParcels));
      setMerchants((prev) => (prev < targetMerchants ? prev + merchantIncrement : targetMerchants));
      setBusinesses((prev) => (prev < targetBusinesses ? prev + businessIncrement : targetBusinesses));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[100vw] h-[100svh]">
      <div className="h-full text-center text-5xl font-bold text-white pb-10 sm:pb-20 flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-0 text-5xl sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-transparent bg-gradient-to-b from-white to-gray-400 bg-clip-text z-20 animate-fade-in">
          <span>We Drive,</span>
          <span> We Discover</span>
        </div>

        <div className="z-20 flex flex-col sm:flex-row gap-6 sm:gap-10">
          <Link href="https://mtg-attendance.vercel.app/open-clock">
            <button className="relative inline-flex items-center gap-2 px-8 py-3 font-semibold text-teal-50 bg-gradient-to-tr from-amber-200/60 via-amber-300/70 to-amber-300/80 ring-4 ring-amber-200/25 rounded-full overflow-hidden hover:opacity-95 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-teal-50/10 before:blur-xl text-base animate-arrow">
              Login
              <span className="svg pt-[1px]">
                {/* Add your SVG icon here */}
              </span>
            </button>
          </Link>

          <Link href="https://matengbusiness.vercel.app/delivery_orders">
            <button className="relative inline-flex items-center gap-2 px-8 py-3 font-semibold text-teal-50 bg-gradient-to-tr from-teal-900/30 via-teal-900/70 to-teal-900/30 ring-4 ring-teal-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-teal-50/10 before:blur-xl text-base animate-arrow">
              Business Login
              <span className="svg pt-[1px]">
                {/* Add your SVG icon here */}
              </span>
            </button>
          </Link>
        </div>

        {/* Optional stats block (uncomment if needed) */}
        {/* 
        <div className="w-full z-20">
          <div className="flex flex-row justify-center gap-2 sm:gap-0 md:gap-10 text-[#b5b6be] text-base md:text-lg lg:text-[1.3rem] w-[95vw] sm:w-[80vw] md:w-fit mx-auto ">
            <div>
              Delivered <span className="text-green-600">{parcels}+</span> parcels
            </div>
            <div className="w-[2px] h-11 sm:h-7 mx-auto rounded bg-gray-200/40" />
            <div>
              Merchants <span className="text-green-600">{merchants}+</span>
            </div>
            <div className="w-[2px] h-11 sm:h-7 mx-auto rounded bg-gray-200/40" />
            <div>
              Discovered <span className="text-green-600">{businesses}+</span> businesses
            </div>
          </div>
        </div>
        */}
      </div>

      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}
