import React from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {

    return(
        <div className="fixed top-0 z-50 bg-transparent h-[100px] w-screen text-white flex justify-between items-center">

           {/* left div for logo*/}
           <div className=" w-[40%] h-[50px] flex justify-evenly items-center font-sans">
            {/* logo */}
             <div className=" text-[30px] font-bold">WildQuest</div>

             {/* searchbar */}

             
                <input className="border-white border outline-0 rounded w-[50%] h-[30px] pl-3 text-white" type="text" placeholder="Search"></input>
           
            

           </div>

           {/* right div for nav menu */}
           <div className=" text-black  w-[30%] h-[50px] flex items-center justify-evenly">
            <div className="text-lg font-bold hover:text-green-500">Tracking</div>
            <div className="text-lg font-bold hover:text-green-500">Safari</div>
            <div className="text-lg font-bold hover:text-green-500">Services</div>
            <div className="text-lg font-bold hover:text-green-500">Contact</div>

           </div>

        </div>
    )
}


export default Header;