import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";


const TrackData = [
    {
        img : "https://api.trekkingmantra.com/images/1757666680862-ee7onw7hkwcjeaa7rooppgeobpif_Downpic.cc-image489670139.avif",
        title : "Chabutra Trek – With Garh Ganesh Temple Darshan",
        place : "Rajsthan",
        hrs : "4-5 hours",
        person : "30-40 members",
        price : "₹199",
        preprice : "₹999",
    },

      {
        img : "https://api.trekkingmantra.com/images/1759138286054-6.png",
        title : "Ban ki Ghati Trek - With Jal Mahal & Amagarh Safari Views ",
        place : "Rajsthan",
        hrs : "4-5 hours",
        person : "40 members",
        price : "₹199",
        preprice : "₹999",
    },

       {
        img : "https://api.trekkingmantra.com/images/1760689135648-6.png",
        title : "Achrol Fort Trek - With Arawali Range views ",
        place : "Rajsthan",
        hrs : "4-5 hours",
        person : "30-40 members",
        price : "₹199",
        preprice : "₹999",
    },


       {
        img : "https://api.trekkingmantra.com/images/1759308622622-7.png",
        title : "Mini Kedarnath Trek of Jaipur- With Kedarnath Temple Darshan ",
        place : "Rajsthan",
        hrs : "3-4 hours",
        person : "30-40 members",
        price : "₹199",
        preprice : "₹999",
    },

       {
        img : "https://api.trekkingmantra.com/images/1761731525333-IMG_6058.JPG",
        title : "Amagarh Fort trek with surya mandir ",
        place : "Rajsthan",
        hrs : "4-5 hours",
        person : "30-40 members",
        price : "₹199",
        preprice : "₹999",
    },

       {
        img : "https://api.trekkingmantra.com/images/1762239814711-3.png",
        title : "Jal Mahal Valley Trek with Amer Fort and Man Sagar Lake views",
        place : "Rajsthan",
        hrs : "4-5 hours",
        person : "30-40 members",
        price : "₹199",
        preprice : "₹999",
    },

]

const Tracking = () => {
    return(
        <div>
            
            <div id="trckh" style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/01/96/01/82/360_F_196018299_moUD9nFRL1OWaVTUG7YgsdCk3gCQVzj7.jpg")`, backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }} className=" w-full h-[50vh]  flex flex-col justify-center items-center ">
                <h1 className="text-5xl text-white font-semibold ">Our Traking Packages</h1>
                 

                            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-white sm:text-xl/8">
                        Fun-filled wildlife tours designed for all ages.
                    Discover forests, animals, and nature like never before.
                        </p>
            </div>

           




            {/* treking packages cards */}

              <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 ">
               
                

                <div className='Tcards flex flex-wrap items-center justify-center gap-10'>
                    
                

                    

                    {TrackData.map((track, index) => (
                            <div
                                key={index}
                                className=" w-[25vw] h-[70vh] rounded-lg border-1 border-gray-300 "
                               
                            >
                                {/* card image */}
                                <img src={track.img} className="w-full h-[200px] rounded-t"></img>

                                {/* card title */}
                                <div className="text-black text-2xl font-medium mx-4 my-2 drop-shadow-lg">
                                {track.title}
                                </div>

                                {/* location,time,person */}
                                <div>
                                    <div className="flex items-center gap-1 mx-4  my-1">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        <p>{track.place}</p>
                                        </div>

                                        <div className="flex items-center gap-1 mx-4 my-1">
                                        <FontAwesomeIcon icon={faClock} />
                                        <p>{track.hrs}</p>
                                        </div>

                                        <div className="flex items-center gap-1 mx-4 my-1">
                                        <FontAwesomeIcon icon={faUsers} />
                                        <p>{track.person}</p>
                                        </div>
                                    
                                    
                                    
                                </div>

                                {/* price div */}
                                <div className="flex items-center gap-1 mx-4 my-3">
                                    <div className="text-2xl font-bold text-[#EA580C]">{track.price}</div>
                                    <div className="text-gray-500"><strike>{track.preprice}</strike></div>
                                </div>


                                {/* facilites */}
                                <div className="Tref flex items-center mx-4 gap-2">
                                     <div className="flex items-center gap-1  my-1 rounded-2xl px-3 border">
                                        <FontAwesomeIcon icon={faUtensils} size="xs" />
                                        <p className="text-sm">Refreshments</p>
                                        </div>

                                        <div className="flex items-center gap-1  my-1 border rounded-2xl px-3">
                                       <FontAwesomeIcon icon={faGuitar} size="xs"/>
                                        <p className="text-sm">Live Music</p>
                                        </div>

                                         <div className="flex items-center gap-1  my-1 border rounded-2xl px-3">
                                       <FontAwesomeIcon icon={faChessKnight} size="xs"/>
                                        <p className="text-sm">Games</p>
                                        </div>
                                </div>


                                {/* card buttons */}
                                <div className="flex items-center  mx-4 my-2 gap-2">

                                    <button className="border-gray-300 border font-semibold text-sm w-[150px] h-[40px] rounded hover:bg-gray-100">View Details</button>
                                    <button className="border text-white font-semibold text-sm w-[150px] h-[40px] rounded bg-[#EA580C] hover:bg-[#c55112]">Book Now</button>
                                </div>





                            </div>
                            ))}



        
    </div>





    </div>


        </div>
    )
}

export default Tracking;