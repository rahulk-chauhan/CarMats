import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='bottom-0 left-0 w-full'>
           
           
            <div className='flex justify-center items-center text-center h-20 bg-[#222] text-white md:tracking-widest leading-tight font-semibold'>
 {/* <div className="justify-between lg:justify-start lg:gap-x-[100px] lg:gap-y-[20px] gap-3 flex flex-wrap mb-20">
            <div className="lg:w-full md:w-full">
              <div className="bg-white w-[183px] h-[68px] rounded-lg px-4 py-2 flex gap-3 lg:col-span-5 md:mb-8  ">
              
                <div>
                  <h3 className="text-[#1D1D1D] text-xl font-semibold">
                    Agency
                  </h3>
                  <h5 className="text-[#464646] text-base font-Quicksand ">
                    Creative
                  </h5>
                </div>
              </div>
            </div>
            <div className="sm:w-full">
              <h2 className="text-white text-[22px] sm:text-[18px] font-Quicksand font-bold">
                Terms & policies
              </h2>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="/">Terms of Service</Link>
              </h3>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="/">Privacy Policy</Link>
              </h3>
            </div>
            <div className="sm:w-full sm:mt-8">
              <h2 className="text-white text-[22px] sm:text-[18px] font-Quicksand font-bold">
                Company
              </h2>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="/">Home</Link>
              </h3>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="#about">About Us</Link>
              </h3>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="/">Contact Us</Link>
              </h3>
            </div>
            <div className="sm:w-full sm:mt-8">
              <h2 className="text-white text-[22px] sm:text-[18px] font-Quicksand font-bold">
                Contact
              </h2>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="tel:893912392190">(+62) 893912392190</Link>
              </h3>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                <Link href="mailto:agecnycr@gmail.com">agecnycr@gmail.com</Link>
              </h3>
            </div>
            <div className="xxl:w-[334px] xl:w-[300px] sm:mt-8">
              <h2 className="text-white text-[22px] sm:text-[18px] font-Quicksand font-bold">
                Location
              </h2>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 leading-10 sm:mt-4">
                PT Osiris Real Estate Internasional Jl. KH. Wahid Hasyim Kel
                No.10D Jakarta, Indonesia
              </h3>
              <h3 className="text-white text-[18px] sm:text-[16px] font-Quicksand mt-6 sm:mt-4">
                team@OsirisRealEstate.com
              </h3>
            </div>
          </div> */}
                <h4>
                    &copy; {new Date().getFullYear()}
                    <span className='text-secondary-200'> AM CarMates </span>
                </h4>
                <h4 className='ml-3'>All rights reserved</h4>
            </div>
        </div>
    );
};

export default Footer;