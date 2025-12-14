import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";



const places = [
  { "name": "Manali", "url": "https://www.google.com/search?q=Manali" },
  { "name": "Shimla", "url": "https://www.google.com/search?q=Shimla" },
  { "name": "Darjeeling", "url": "https://www.google.com/search?q=Darjeeling" },
  { "name": "Ooty", "url": "https://www.google.com/search?q=Ooty" },
  { "name": "Munnar", "url": "https://www.google.com/search?q=Munnar" },
  { "name": "Nainital", "url": "https://www.google.com/search?q=Nainital" },
  { "name": "Leh Ladakh", "url": "https://www.google.com/search?q=Leh+Ladakh" },
  { "name": "Gangtok", "url": "https://www.google.com/search?q=Gangtok" },
  { "name": "Mount Abu", "url": "https://www.google.com/search?q=Mount+Abu" },
  { "name": "Kodaikanal", "url": "https://www.google.com/search?q=Kodaikanal" },
  { "name": "Mussoorie", "url": "https://www.google.com/search?q=Mussoorie" },
  { "name": "Tawang", "url": "https://www.google.com/search?q=Tawang" },
  { "name": "Spiti Valley", "url": "https://www.google.com/search?q=Spiti+Valley" },
  { "name": "Rishikesh", "url": "https://www.google.com/search?q=Rishikesh" },
  { "name": "Jaipur", "url": "https://www.google.com/search?q=Jaipur" },
  { "name": "Udaipur", "url": "https://www.google.com/search?q=Udaipur" },
  { "name": "Goa", "url": "https://www.google.com/search?q=Goa" },
  { "name": "Andaman and Nicobar", "url": "https://www.google.com/search?q=Andaman+and+Nicobar" },
  { "name": "Kerala Backwaters", "url": "https://www.google.com/search?q=Kerala+Backwaters" },
  { "name": "Rann of Kutch", "url": "https://www.google.com/search?q=Rann+of+Kutch" },
  { "name": "Jim Corbett National Park", "url": "https://www.google.com/search?q=Jim+Corbett+National+Park" },
  { "name": "Ranthambore National Park", "url": "https://www.google.com/search?q=Ranthambore+National+Park" },
  { "name": "Gir National Park", "url": "https://www.google.com/search?q=Gir+National+Park" },
  { "name": "Kaziranga National Park", "url": "https://www.google.com/search?q=Kaziranga+National+Park" },
  { "name": "Bandhavgarh National Park", "url": "https://www.google.com/search?q=Bandhavgarh+National+Park" },
  { "name": "Sundarbans", "url": "https://www.google.com/search?q=Sundarbans" },
  { "name": "Periyar Wildlife Sanctuary", "url": "https://www.google.com/search?q=Periyar+Wildlife+Sanctuary" },
  { "name": "Pench National Park", "url": "https://www.google.com/search?q=Pench+National+Park" },
  { "name": "Satpura National Park", "url": "https://www.google.com/search?q=Satpura+National+Park" },
  { "name": "Hampi", "url": "https://www.google.com/search?q=Hampi" },
  { "name": "Kashmir Valley", "url": "https://www.google.com/search?q=Kashmir+Valley" },
  { "name": "Auli", "url": "https://www.google.com/search?q=Auli" },
  { "name": "Coorg", "url": "https://www.google.com/search?q=Coorg" },
  { "name": "Mahabaleshwar", "url": "https://www.google.com/search?q=Mahabaleshwar" },
  { "name": "Pachmarhi", "url": "https://www.google.com/search?q=Pachmarhi" },
  { "name": "Chopta", "url": "https://www.google.com/search?q=Chopta" },
  { "name": "Lonavala", "url": "https://www.google.com/search?q=Lonavala" },
  { "name": "Alleppey", "url": "https://www.google.com/search?q=Alleppey" },
  { "name": "Kanyakumari", "url": "https://www.google.com/search?q=Kanyakumari" },
  { "name": "Puri", "url": "https://www.google.com/search?q=Puri" },
  { "name": "Varanasi", "url": "https://www.google.com/search?q=Varanasi" },
  { "name": "Rameswaram", "url": "https://www.google.com/search?q=Rameswaram" },
  { "name": "Haridwar", "url": "https://www.google.com/search?q=Haridwar" },
  { "name": "Shillong", "url": "https://www.google.com/search?q=Shillong" },
  { "name": "Ziro Valley", "url": "https://www.google.com/search?q=Ziro+Valley" },
  { "name": "Diu", "url": "https://www.google.com/search?q=Diu" },
  { "name": "Lakshadweep", "url": "https://www.google.com/search?q=Lakshadweep" },
  { "name": "Valley of Flowers", "url": "https://www.google.com/search?q=Valley+of+Flowers" },
  { "name": "Havelock Island", "url": "https://www.google.com/search?q=Havelock+Island" },
  { "name": "Gokarna", "url": "https://www.google.com/search?q=Gokarna" },
  { "name": "Kovalam", "url": "https://www.google.com/search?q=Kovalam" },
  { "name": "Varkala", "url": "https://www.google.com/search?q=Varkala" },
  { "name": "Mechuka", "url": "https://www.google.com/search?q=Mechuka" },
  { "name": "Wayanad", "url": "https://www.google.com/search?q=Wayanad" },
  { "name": "Tarkarli", "url": "https://www.google.com/search?q=Tarkarli" },
  { "name": "Cherrapunji", "url": "https://www.google.com/search?q=Cherrapunji" },
  { "name": "Mawlynnong", "url": "https://www.google.com/search?q=Mawlynnong" },
  { "name": "Dharamshala", "url": "https://www.google.com/search?q=Dharamshala" },
  { "name": "McLeod Ganj", "url": "https://www.google.com/search?q=McLeod+Ganj" },
  { "name": "Bir Billing", "url": "https://www.google.com/search?q=Bir+Billing" },
  { "name": "Kolad", "url": "https://www.google.com/search?q=Kolad" },
  { "name": "Gulmarg", "url": "https://www.google.com/search?q=Gulmarg" },
  { "name": "Pahalgam", "url": "https://www.google.com/search?q=Pahalgam" },
  { "name": "Sonmarg", "url": "https://www.google.com/search?q=Sonmarg" },
  { "name": "Bikaner", "url": "https://www.google.com/search?q=Bikaner" },
  { "name": "Jaisalmer", "url": "https://www.google.com/search?q=Jaisalmer" },
  { "name": "Nubra Valley", "url": "https://www.google.com/search?q=Nubra+Valley" },
  { "name": "Pondicherry", "url": "https://www.google.com/search?q=Pondicherry" },
  { "name": "Dandeli", "url": "https://www.google.com/search?q=Dandeli" },
  { "name": "Kabini", "url": "https://www.google.com/search?q=Kabini" },
  { "name": "Bannerghatta National Park", "url": "https://www.google.com/search?q=Bannerghatta+National+Park" },
  { "name": "Nagarhole National Park", "url": "https://www.google.com/search?q=Nagarhole+National+Park" },
  { "name": "Mandarmani", "url": "https://www.google.com/search?q=Mandarmani" },
  { "name": "Siliguri", "url": "https://www.google.com/search?q=Siliguri" },
  { "name": "Konark", "url": "https://www.google.com/search?q=Konark" },
  { "name": "Sanchi Stupa", "url": "https://www.google.com/search?q=Sanchi+Stupa" },
  { "name": "Madurai", "url": "https://www.google.com/search?q=Madurai" },
  { "name": "Saputara", "url": "https://www.google.com/search?q=Saputara" },
  { "name": "Tirupati", "url": "https://www.google.com/search?q=Tirupati" },
  { "name": "Amritsar", "url": "https://www.google.com/search?q=Amritsar" },
  { "name": "Chandigarh", "url": "https://www.google.com/search?q=Chandigarh" },
  { "name": "Kasauli", "url": "https://www.google.com/search?q=Kasauli" },
  { "name": "Binsar", "url": "https://www.google.com/search?q=Binsar" },
  { "name": "Kausani", "url": "https://www.google.com/search?q=Kausani" },
  { "name": "Mukteshwar", "url": "https://www.google.com/search?q=Mukteshwar" },
  { "name": "Yercaud", "url": "https://www.google.com/search?q=Yercaud" },
  { "name": "Srisailam", "url": "https://www.google.com/search?q=Srisailam" },
  { "name": "Tadoba National Park", "url": "https://www.google.com/search?q=Tadoba+National+Park" },
  { "name": "Little Rann of Kutch", "url": "https://www.google.com/search?q=Little+Rann+of+Kutch" },
  { "name": "Araku Valley", "url": "https://www.google.com/search?q=Araku+Valley" },
  { "name": "Gandikota Canyon", "url": "https://www.google.com/search?q=Gandikota+Canyon" },
  { "name": "Chittorgarh", "url": "https://www.google.com/search?q=Chittorgarh" },
  { "name": "Kotagiri", "url": "https://www.google.com/search?q=Kotagiri" },
  { "name": "Valparai", "url": "https://www.google.com/search?q=Valparai" },
  { "name": "Horsley Hills", "url": "https://www.google.com/search?q=Horsley+Hills" },
  { "name": "Dehradun", "url": "https://www.google.com/search?q=Dehradun" },
  { "name": "Agra", "url": "https://www.google.com/search?q=Agra" },
  { "name": "Delhi", "url": "https://www.google.com/search?q=Delhi" },
  { "name": "Mumbai", "url": "https://www.google.com/search?q=Mumbai" },
  { "name": "Chennai", "url": "https://www.google.com/search?q=Chennai" },
  { "name": "Bangalore", "url": "https://www.google.com/search?q=Bangalore" }
]

const Header = () => {

    const [open,setOpen] = useState("false");

    
  
  const [query, setQuery] = useState("");

  const filtered = places.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

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
           <div className="leftdiv w-[40%] h-[50px] flex justify-evenly items-center font-sans">



            {/* mobile menu */}

           <div id="sidebar" className={` ${open === true ? "translate-y-0": "translate-y-full"}    bg-gray-300 h-[100vh] w-[70%] absolute top-0 left-0 z-100 flex flex-col `}>
                {/* top logo  */}
                <div className=" w-full ">
                     <div className=" text-[30px] font-bold text-green-500"><NavLink to="/">WildQuest</NavLink></div>
                     <button onClick={()=>setOpen(false)} className="text-2xl absolute right-4 top-2 text-black font-bold">✕</button>
                </div>

                {/* pages links */}
                <div  className=" w-full h-full">

                    <div className="  w-[30%] h-[50px] flex flex-col gap-5 ">
            <div className="border-b-2 text-lg font-bold hover:text-green-500"><NavLink to="./Tracking" >Tracking</NavLink></div>
            <div className="border-b-2 text-lg font-bold hover:text-green-500"><NavLink to="./Safari" >Safari</NavLink></div>
            <div className="border-b-2 text-lg font-bold hover:text-green-500"><NavLink to="./Services" >Services</NavLink></div>
            <div className="border-b-2 text-lg font-bold hover:text-green-500"><NavLink to="./Contact" >Contact</NavLink></div>

           </div>
                </div>

            </div>

            

            <button className="ham-menu" onClick={()=>setOpen(true)}><FontAwesomeIcon icon={faBars} color="black" size="xl"/></button>






            {/* logo */}
             <div className=" text-[30px] font-bold"><NavLink to="/">WildQuest</NavLink> </div>

             {/* searchbar */}

             

             
                <input className="border-white border outline-black rounded w-[50%] h-[30px] pl-3 text-white " type="text" placeholder="Search" value={query}
        onChange={(e) => setQuery(e.target.value)}></input>


      
      {query.length > 0 && (
        <div id="srch-box" className="bg-white h-[25vh] w-[300px] border mt-2 rounded shadow-md p-2 absolute top-14 left-[255px] overflow-hidden">
          {filtered.length > 0 ? (
            filtered.map((place, index) => (
                <div className="flex flex-col ">

              <a
                key={index}
                href={place.url}
                target="_blank"
                style={{textDecoration:"none",color:"black"}}
              >
                {place.name}
              </a>

              </div>
            ))
          ) : (
            <p className="p-2 text-gray-500">No results found</p>
          )}
        </div>
      )}
           
            

           </div>

           {/* right div for nav menu */}
           <div id="nav-links" className={` ${isScrolled ? "text-white" : " text-black"}  w-[30%] h-[50px] flex items-center justify-evenly`}>
            <div className="text-lg font-bold hover:text-green-500"><NavLink to="./Tracking" >Tracking</NavLink></div>
            <div className="text-lg font-bold hover:text-green-500"><NavLink to="./Safari" >Safari</NavLink></div>
            <div className="text-lg font-bold hover:text-green-500"><NavLink to="./Services" >Services</NavLink></div>
            <div className="text-lg font-bold hover:text-green-500"><NavLink to="./Contact" >Contact</NavLink></div>

           </div>

           




        </div>

    )
}


export default Header;