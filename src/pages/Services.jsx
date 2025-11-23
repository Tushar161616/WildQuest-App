import React from "react";


const Services = () => {
    return(
        <div>
             <div className=" w-full h-[50vh] bg-green-600 flex flex-col justify-center items-center">
                <p className="mt-2 text-5xl font-bold tracking-tight text-balance text-white sm:text-6xl">
         Service We Provide
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-black sm:text-xl/8">we make your journey smooth, comfortable, and unforgettable. From stay to food to travel — we take care of everything so you can enjoy your adventure without worries.</p>

       
            </div>

              <div className="bg-gray-300 w-full py-5 px-14 ">
               
               
                {/* Hotel section */}
               <div className="flex mt-20">

                 {/* image section */}
                <div className=" flex justify-left items-center w-[50%] h-[50vh] ">
                    <img className="rounded-2xl object-cover w-[600px] h-[350px]" src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_85,fl_progressive/w_750,f_auto,c_fit/the-golden-tusk-jim-corbett/Website_-_Nature_View_Suite_-_Golden_Tusk_haaror" />
                </div>

                {/* Text section */}
                <div className=" w-[50%] h-[50vh] flex flex-col justify-center items-end gap-5">
                    {/* box heading */}
                    <div className="text-4xl uppercase font-semibold">Comfortable Hotel Stay</div>

                    <p className="text-lg text-right">Enjoy a relaxing stay with our hand-picked hotels and cozy rooms. We provide clean, comfortable, and affordable accommodations close to major tourist attractions. Perfect for families, couples, and solo travellers.</p>

                                       <a href="#" className="btn inline-block py-3 px-7 bg-green-500
                    shadow text-white font-semibold rounded-md 
                    hover:bg-green-600 hover:text-white"
                >
                 See More
                </a>

                </div>

               

                </div>

                {/*  Food  Section */}
               <div className="flex mt-20">

                
                {/* Text section */}
                <div className=" w-[50%] h-[50vh] flex flex-col justify-center items-start gap-5">
                    {/* box heading */}
                    <div className="text-3xl font-semibold uppercase">Famous Place's Food</div>

                    <p className="text-lg text-left">Taste the true flavors of the region with our curated list of popular local dishes. Whether you love street food or traditional meals, we bring you the best food spots to make your trip delicious and memorable.</p>

                                        <a href="#" className="btn inline-block py-3 px-7 bg-green-500
                    shadow text-white font-semibold rounded-md 
                    hover:bg-green-600 hover:text-white"
                >
                 See More
                </a>

                </div>

                {/* image section */}
                <div className=" flex justify-end items-center w-[50%] h-[50vh] ">
                    <img className="rounded-2xl object-cover w-[600px] h-[350px]" src="https://www.treebo.com/blog/wp-content/uploads/2017/04/Street-Food-in-Jaipur.jpg" />
                </div>

                </div>


                
                {/* rent section */}
               <div className="flex mt-20">

                 {/* image section */}
                <div className=" flex justify-left items-center w-[50%] h-[50vh] ">
                    <img className="rounded-2xl object-cover w-[600px] h-[350px]" src="https://yatrabike.com/wp-content/uploads/2024/09/about.jpg" />
                </div>

                {/* Text section */}
                <div className=" w-[50%] h-[50vh] flex flex-col justify-center items-end gap-5">
                    {/* box heading */}
                    <div className="text-4xl uppercase font-semibold">Rent Vehicles Anywhere</div>

                    <p className="text-lg text-right">Travel freely with our easy vehicle rental service. Choose from bikes, scooters, and cars on rent at pocket-friendly prices. Safe, well-maintained vehicles to make your journey smooth and convenient.</p>

                                       <a href="#" className="btn inline-block py-3 px-7 bg-green-500
                    shadow text-white font-semibold rounded-md 
                    hover:bg-green-600 hover:text-white"
                >
                 See More
                </a>

                </div>

               

                </div>

                {/*  Medical  Section */}
               <div className="flex mt-20">

                
                {/* Text section */}
                <div className=" w-[50%] h-[50vh] flex flex-col justify-center items-start gap-5">
                    {/* box heading */}
                    <div className="text-3xl font-semibold uppercase">Medical Assistance</div>

                    <p className="text-lg text-left">Your safety is our priority. We provide quick access to nearby medical support, pharmacies, and emergency services so you can travel with peace of mind.</p>

                                        <a href="#" className="btn inline-block py-3 px-7 bg-green-500
                    shadow text-white font-semibold rounded-md 
                    hover:bg-green-600 hover:text-white"
                >
                 See More
                </a>

                </div>

                {/* image section */}
                <div className=" flex justify-end items-center w-[50%] h-[50vh] ">
                    <img className="rounded-2xl object-cover w-[600px] h-[350px]" src="https://thumbs.dreamstime.com/b/male-pediatrician-examining-little-child-stethoscope-home-visit-mother-nearby-focused-concerned-sitting-caring-415982069.jpg" />
                </div>

                </div>



            
            

            </div>



        </div>
    )
}

export default Services;