import React from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return(
        <div className={`fixed top-0 z-50  h-[100px] w-screen text-white flex justify-between items-center ${isScrolled ? "bg-black/50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>

           {/* left div for logo*/}
           <div className=" w-[40%] h-[50px] flex justify-evenly items-center font-sans">
            {/* logo */}
             <div className=" text-[30px] font-bold"><NavLink to="/">WildQuest</NavLink> </div>

             {/* searchbar */}

             
                <input className="border-white border outline-black rounded w-[50%] h-[30px] pl-3 text-white " type="text" placeholder="Search"></input>
           
            

           </div>

           {/* right div for nav menu */}
           <div className={` ${isScrolled ? "text-white" : " text-black"}  w-[30%] h-[50px] flex items-center justify-evenly`}>
            <div className="text-lg font-bold hover:text-green-500"><NavLink to="./Tracking" >Tracking</NavLink></div>
            <div className="text-lg font-bold hover:text-green-500"><NavLink to="./Safari" >Safari</NavLink></div>
            <div className="text-lg font-bold hover:text-green-500"><NavLink to="./Services" >Services</NavLink></div>
            <div className="text-lg font-bold hover:text-green-500"><NavLink to="./Contact" >Contact</NavLink></div>

           </div>

        </div>
    )
}


export default Header;