import React, { useState } from "react";
import Hero from "../components/Hero";



const hilldata = [
    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/nainital-explore.webp",
        title : "Nainital",
    },

     {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/auli-explore.webp",
        title : "Auli",
    },

    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/mussoorie-explore.webp",
        title : "Mussoorie",
    },

     {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/almora-explore.webp",
        title : "Almora",
    },

    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/badrinath-explore.webp",
        title : "Badrinath",
    },

     {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/gangotri-explore.webp",
        title : "Gangotri",
    },

    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/kausani-explore.webp",
        title : "Kausani",
    },

     {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/ranikhet-explore.webp",
        title : "Ranikhet",
    },

    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/srinagar-explore.webp",
        title : "Srinagar",
    },

     {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/pahalgam-explore.webp",
        title : "Pahalgam",
    },

    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/sonmarg-explore.webp",
        title : "Sonmarg",
    },

    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/gulmarg-explore.webp",
        title : "Gulmarg",
    },

    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/manali-explore.webp",
        title : "Manali",
    },

     {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/shimla-explore.webp",
        title : "Shimla",
    },

    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/dalhousie-explore.webp",
        title : "Dalhousie",
    },

    
    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/kullu-explore.webp",
        title : "Kullu",
    },

    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/gangtok-explore.webp",
        title : "Gangtok",
    },

    
    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/darjeeling-explore.webp",
        title : "Darjeeling",
    },

    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/ooty-explore.webp",
        title : "Ooty",
    },

    
    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/mahabaleshwar-explore.webp",
        title : "Mahabaleshwar",
    },

    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/lonavala-explore.webp",
        title : "Lonavala",
    },

    
    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/kodaikanal-explore.webp",
        title : "Kodaikanal",
    },

    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/kalimpong-explore.webp",
        title : "Kalimpong",
    },

    
    {
        img : "https://www.tourmyindia.com/hill_stations/assets/img/wayanad-explore.webp",
        title : "Wayanad",
    },



]

 

const Home = () => {



 

    return(
        <div>
            {/* mobile sidebar */}
           
            <Hero />

            {/* up-coming events section */}

            <div className="bg-gray-300 w-full py-5 px-14">
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

            {/* hill stations */}

            <div className="w-full  bg-gray-400 py-[40px] flex flex-col items-center">
                {/* heading */}
                <div className="text-5xl font-bold text-center text-black">Explore Top Hill Stations</div>

                {/* name cards */}

                  <div className="w-[80%] my-[30px] flex items-center gap-8 justify-center flex-wrap">

                {hilldata.map((hill,i)=>(

                    <div key={i} className="border border-gray-200 pl-2.5 flex items-center justify-start gap-2 w-[250px] h-[100px] bg-white hover:shadow-2xl">
                        <img src={hill.img} />
                        <div className="text-xl">{hill.title}</div>
                    </div>
                    
                ))}

              

                    
                </div>


            </div>



            

        </div>
    )
}

export default Home;