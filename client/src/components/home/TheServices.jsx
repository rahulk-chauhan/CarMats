import React from "react";

// import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';


const TheServices = () => {
    return (
        <div className=" px-8 py-24">
            <div className="xl:w-[85%] mx-auto">

                <div className="flex justify-between mb-12">
                    <h3 className="text-3xl text-[black] capitalize tracking-wide font-semibold w-1/2">
                        explore our top products <br /> and find something new</h3>
                    <p className="w-1/2 leading-relaxed text-[black]">One of the many five-star customer reviews reads,
                     This set is of great quality. They're thick and rugged with deep honeycomb wells. The price is perfect too.

</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-center">

                    <div className="flex flex-col items-center bg-no-repeat bg-cover bg-[url('https://cdn.shopify.com/s/files/1/0033/0239/1877/files/Climats-58_370x208_crop_top.jpg?v=1613522102')] py-12 px-8 rounded">
                        {/* <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiCompass /></span> */}
                        <h4 className="capitalize text-2xl text-[white] mb-3 font-bold">Water Resistant</h4>
                        <p className="leading-relaxed text-[white]">
                        Our quality mats are designed to be water resistant.
                        This ensures long-lasting durability for years to come.</p>
                    </div>

                    <div className="flex flex-col items-center bg-no-repeat bg-cover bg-[url('https://cdn.shopify.com/s/files/1/0033/0239/1877/files/Climats-66_370x208_crop_top.jpg?v=1613522102')] py-12 px-8 rounded">
                        {/* <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiDiamondHard /></span> */}
                        <h4 className="capitalize text-2xl text-[white] mb-3 font-bold">Air-Tight Fit</h4>
                        <p className="leading-relaxed text-[white]">
                        Every single CliMat is designed to perfectly fit your vehicle.
                         Find your custom mat now for your car!</p>
                    </div>
                    <div className="flex flex-col items-center bg-no-repeat bg-cover bg-[url('https://cdn.shopify.com/s/files/1/0033/0239/1877/files/Climats-28_370x208_crop_top.jpg?v=1613522102')] py-12 px-8 rounded">
                        {/* <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiStabbedNote /></span> */}
                        <h4 className="capitalize text-3xl text-[white] mb-3 font-bold">Mud Resistant</h4>
                        <p className="leading-relaxed text-[white]">
                        Our interior mats are designed with traction and durability 
                        to provide the utmost maximum protection.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default TheServices;