import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

const Footer = () => {

    return(
        <div className="bbox bg-gray-800 h-[40vh] w-full relative flex flex-col">

            {/* text section */}
            <div className="btext  w-full h-[30vh] flex justify-evenly items-center ">
               
                {/* services */}
                <div className="pl-20  w-[30%] h-full flex flex-col gap-2 justify-center ">
                    {/* heading */}
                    <div className="text-white text-lg font-semibold">Services We Provide</div>
                    {/* links */}
                    <div className="text-white hover:text-green-500 ">Hotel Room</div>
                    <div className="text-white  hover:text-green-500">Famous Food</div>
                    <div className="text-white  hover:text-green-500">Rent Vehicles</div>
                    <div className="text-white hover:text-green-500 ">Medical </div>
                </div>
                
                {/* links */}
                <div className="pl-20  w-[30%] h-full flex flex-col gap-2 justify-center ">
                     {/* heading */}
                    <div className="text-white text-lg font-semibold">Other Links</div>
                    {/* links */}
                    
                    <div className="text-white  hover:text-green-500">Destinations</div>
                    <div className="text-white  hover:text-green-500">About Us</div>
                    <div className="text-white hover:text-green-500 ">Gallery</div>
                    <div className="text-white hover:text-green-500 ">FAQs </div>
                </div>
                
                {/* social links */}
                <div className="pl-20  w-[30%] h-full flex flex-col gap-2 justify-evenly ">
                     {/* heading */}
                    <div className="text-white text-lg font-semibold">Social</div>
                   
                    <div className="flex  gap-6">

                    <span><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} size="2xl"  /></span>
                    <span><FontAwesomeIcon icon={faSquareInstagram} style={{color: "#ffffff",}}   size="2xl" /></span>
                    <span><FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",}}  size="2xl" /></span>
                    <span><FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}}  size="2xl" /></span>

                    </div>

                </div>

            </div>
           
            {/* bottom msg */}
            <div className=" absolute bottom-0 left-0 w-full h-[40px] bg-green-300 flex justify-center items-center">
                <div className="bmsg">© 2025 WildQuest Adventures — Where every journey becomes a story | Designed with <FontAwesomeIcon icon={faHeart} beat size="lg" style={{color: "#ff0000",}} /> in India |</div>
            </div>
        </div>
    )
}


export default Footer;