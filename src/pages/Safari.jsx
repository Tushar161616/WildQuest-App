import React from "react";
import Hero from "../components/Hero";
import Pakage from "../components/Pakage";

const Safari = () => {
    return(
        <div>
               <Hero />

            {/* up-coming events section */}

            <div className="bg-gray-300 w-full py-5 px-14 ">
                {/* main heading */}
                <h1 className="text-4xl font-semibold m-5 ">Upcoming Adventures</h1>
               
               {/* event-1 */}
               <div className="flex mt-20">

                 {/* image section */}
                <div className=" flex justify-left items-center w-[50%] h-[50vh] ">
                    <img className="rounded-2xl object-cover w-[600px] h-[350px]" src="https://desertheritagecampandresort.com/img/nightcampjaisalmer.jpg" />
                </div>

                {/* Text section */}
                <div className=" w-[50%] h-[50vh] flex flex-col justify-center items-end gap-5">
                    {/* box heading */}
                    <div className="text-3xl font-semibold">Moonlight Desert Trek – Jaisalmer (Dec 2025)</div>

                    <p className="text-lg text-right">Feel the magic of golden desert dunes under a blanket of sparkling stars as night falls, where silence speaks, adventure rises, and unforgettable moments come alive beneath the moonlit sky.</p>

                                       <a href="#" className="btn inline-block py-3 px-7 bg-blue-500
                    shadow text-white font-semibold rounded-md 
                    hover:bg-blue-800 hover:text-white"
                >
                 Join the Adventure
                </a>

                </div>

               

                </div>

                {/* event-2 */}
               <div className="flex mt-20">

                
                {/* Text section */}
                <div className=" w-[50%] h-[50vh] flex flex-col justify-center items-start gap-5">
                    {/* box heading */}
                    <div className="text-3xl font-semibold">Valley Bike Expedition – Manali (Jan 2026)</div>

                    <p className="text-lg text-left">Ride through the mighty Himalayas, where thrilling mountain roads, fresh chill winds, breathtaking heights, and endless adventure come together, giving you a journey filled with excitement, courage, and unforgettable memories.
</p>

                                        <a href="#" className="btn inline-block py-3 px-7 bg-blue-500
                    shadow text-white font-semibold rounded-md 
                    hover:bg-blue-800 hover:text-white"
                >
                 Join the Adventure
                </a>

                </div>

                {/* image section */}
                <div className=" flex justify-end items-center w-[50%] h-[50vh] ">
                    <img className="rounded-2xl object-cover w-[600px] h-[350px]" src="https://internationalyouthclub.org/wp-content/uploads/2025/01/9t3sb7fcwhcssudujutvh03b4af5_spiti_11zon.jpg" />
                </div>

                </div>

                {/* event-3 */}
               <div className="flex mt-20">

                 {/* image section */}
                <div className=" flex justify-left items-center w-[50%] h-[50vh] ">
                    <img className="rounded-2xl object-cover w-[600px] h-[350px]" src="https://d26dp53kz39178.cloudfront.net/media/uploads/products/Camping-20_result-1674988744799.webp" />
                </div>

                {/* Text section */}
                <div className="  w-[50%] h-[50vh] flex flex-col justify-center items-end gap-5">
                    {/* box heading */}
                    <div className="text-3xl font-semibold">Mystery Forest Camping – Jim Corbett (Feb 2026)</div>

                    <p className="text-lg text-right">Enjoy warm bonfire nights, thrilling wildlife stories, and magical stargazing moments in Jim Corbett Park, where nature’s beauty, adventure, and unforgettable experiences come together under the serene forest sky.</p>

                    <a href="#" className="btn inline-block py-3 px-7 bg-blue-500
                    shadow text-white font-semibold rounded-md 
                    hover:bg-blue-800 hover:text-white"
                >
                 Join the Adventure
                </a>

                </div>

               

                </div>


            </div>


            {/* Travel Pakages */}

            <Pakage />

        </div>
    )
}

export default Safari;