import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";




const Hero = () => {

    // slides data
  const slides = [

    {
         id: 1, 
         title: "01. Sunderban Forest",
         left: "Sund",
         right: "erban", 
         description: "Boat safari in the island waterways to sight tigers and dolphins though creeks and canals, bird-watching in Sajnekhale Bird Sanctuary and a visit to Bhagabatpur Crocodile Project, night safari to witness phytoplanktons",
         img: "https://www.tourmyindia.com/wildlife_sancturies/assets/img/sunderban-mangroove.webp" 
        
    },
    
    { 
        id: 2, 
        title: "02. Gim Corbet Forest",
        left: "Gimc",
        right: "orbet",  
        description: "Elephant Safari, Jeep Safari, Canter Safari.",
        img: "https://treeofliferesorts.com/wp-content/uploads/2022/04/Corbett_View-scaled-1.jpg" 
    },
    
    { 
        id: 3,
        title: "03. Meghalaya Forest",
        left: "Megh",
        right: "alaya", 
        description: "The Khasi Hills are a delight to the eyes. Rightly nicknamed as the ‘Scotland of the East’, these low mountain formation on the Shillong plateau has its own culture and is inhabited by Khasi dwellers who traditionally live in chieftain-ships.",
        img: "https://www.tgetravels.com/wp-content/uploads/2024/05/Cover-Story-Meghalaya-.jpg" 
    },

    { 
        id: 4, 
        title: "04. Gir Forest",
        left: "Gir g",
        right: "ujrat",
        description: "Lion tour, jeep safari, jungle safari etc.", 
        img: "https://www.gujarattourism.com/content/dam/gujrattourism/images/flora--fauna/gir-national-park/gallery/Sasan%20Gir%20(15).jpg" 
    },

    { 
        id: 5, 
        title: "05. Tamilnadu Forest",
        left: "Tamil",
        right: "nadu", 
        description: "Bird watching, Fishing, Kayaking, Boating etc.",
        img: "https://static.toiimg.com/photo/110202358.cms" 
    },

  ];

  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    
    <div id="banner" className="w-[100%] h-[100vh] relative overflow-hidden">
      <div id="hero-slider" className="absolute w-[100%] h-[100%]">

        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`slide absolute w-full h-full transition-opacity duration-700 ${
              i === active ? "opacity-100 z-20" : "opacity-0 z-0"
            }`}
          >

            <img src={slide.img} className="w-full h-full object-cover absolute" />

            {/* LEFT CONTENT */}
            <div className="left-info absolute top-0 left-0 w-[50%] h-[100%]">
              <div className="lefttext blurs absolute w-full h-full bg-[rgb(255,255,255,.1)] backdrop-blur-lg flex items-center justify-end pr-4">
                <h1 className="text-[200px] text-white font-semibold">{slide.left}</h1>
              </div>

              <div className="content absolute left-[8%] bottom-[5%] text-white">
                <div className="htitle text-3xl font-medium">{slide.title}</div>
                <p className="hdes text-lg my-2.5 mr-2.5">
                 {slide.description}
                </p>

                <a href="#" className="btn inline-block py-3 px-7 bg-white
                    shadow text-[#444] font-semibold rounded-md border-2 border-white
                    hover:bg-transparent hover:text-white"
                >
                  More Details
                </a>
              </div>
            </div>

            {/* RIGHT TEXT */}
            <div className="right-info absolute top-0 right-0 w-[50%]
              h-[100%] flex flex-col items-start justify-center righttext"
            >
              <h1 className="r-text text-[200px] text-white font-semibold ">{slide.right}</h1>
              <h3 className="absolute text-[80px] text-white translate-y-[130%] ml-3">
                Forest
              </h3>
            </div>

            {/* NAV BUTTONS */}
            {i === active && (
              <div className="navigation absolute bottom-[8%] right-[5%] z-50 flex gap-6">
                
                <span
                  onClick={prevSlide}
                  className="prev-btn inline-flex w-[50px] h-[50px] border-2 border-white
                    rounded-md cursor-pointer flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faChevronLeft} size="xl" className="text-white" />
                </span>

                <span
                  onClick={nextSlide}
                  className="next-btn inline-flex w-[50px] h-[50px] bg-white border-2 border-white
                    rounded-md cursor-pointer flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faChevronRight} size="xl" className="text-[#444]" />
                </span>

              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};








export default Hero;