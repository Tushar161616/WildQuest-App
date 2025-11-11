import React from "react";

const cardData = [
    {
        img: "https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/golden-tiger.webp",
        title : "Tigers With Golden Triangle",
    },

    {
        img: "https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/kipling-tiger.webp",
        title : "Kipling's Playground Tiger",
    },

     {
        img: "https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/bandipur-waya-tiger.webp",
        title : "Bandipur National Park With Wayanad",
    },


    {
        img: "https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/mysterious-tiger.webp",
        title : "Mysterious Sunderbans Tour",
    },

     {
        img: "https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/karnataka-safari.webp",
        title : "Karnataka Wildlife Safari Tour",
    },

     {
        img: "https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/land-of-tiger.webp",
        title : "Tadoba – The Land Of Tiger Tour",
    },



]



const Safari = () => {
    return(
           <div>
            
            <div style={{ backgroundImage: `url("https://t4.ftcdn.net/jpg/03/10/11/87/360_F_310118733_yP2aaium410OlaEUaP5zjbLIL8isZlvN.jpg")`, backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundPosition: "top center" }} className=" w-full h-[50vh] bg-green-500 flex flex-col justify-center items-center">
                <p className="mt-2 text-5xl font-bold tracking-tight text-balance text-white sm:text-6xl">
         Wildlife Packages
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-black sm:text-xl/8">
       Fun-filled wildlife tours designed for all ages.
Discover forests, animals, and nature like never before.
      </p>
            </div>

           




            <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        
        
      </div>
     

    <div className='flex flex-wrap items-center justify-center gap-20'>
        
       

        

        {cardData.map((card, index) => (
                <div
                    key={index}
                    className=" w-[30vw] h-[80vh] rounded-3xl relative bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${card.img})` }}
                >
                    <div className="absolute bottom-0 left-0 text-white text-4xl font-medium mx-4 my-6 drop-shadow-lg">
                    {card.title}
                    </div>
                </div>
                ))}



        
    </div>





    </div>

        </div>
    )
}

export default Safari;