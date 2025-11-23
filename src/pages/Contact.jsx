import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

    const [user,setUser] = useState({name:"",email:"",contact:"",subject:"", masg:""});
     const {name,contact,email,subject,masg} = user;
     const [msg,setMsg] = useState("");

    function updateUser(e){
      
        let key = e.target.name;

        setUser({...user,[key]: e.target.value});

        console.log(user);
        
    }

    function SubmitUser(e){
        e.preventDefault();
        if(!name || !contact || !email || !subject){
            alert("Please Fill All Fields!");
        }
        else{
            setMsg("Message Sent Succesfully we'll get back to you as soon as possible!");
           
            
        }
    }

    return(
        <div>
              <div style={{backgroundColor:"darkblue" }} className=" w-full h-[50vh] flex flex-col justify-center items-center">
                <p className="mt-2 text-5xl font-bold tracking-tight text-balance text-white sm:text-6xl">
         Contact Us
        </p>

       
            </div>


            <div className="conS w-full flex items-center justify-around p-[50px]">


                <div className="conleft h-full  w-[350px] flex flex-col gap-5">
                    
                    {/* phone div */}
                    <div className="w-full h-[120px] border rounded-2xl p-3">
                        <div><span className="text-2xl font-semibold"><FontAwesomeIcon icon={faPhone} size="sm" /> Phone</span></div>
                        <div><div className="text-xl">+91-905-722-8494</div><div className="text-xl ">+91-905-722-8494</div></div>
                    </div>


                    {/* email div */}
                    <div className="w-full h-[120px] border rounded-2xl p-3">
                        <div><span className="text-2xl font-semibold"><FontAwesomeIcon icon={faEnvelope} size="sm" /> Email</span></div>
                        <div><div className="text-xl">contact@wildquest.com</div><div className="text-lg text-gray-600 ">We'll respond within 24 hours</div></div>
                    </div>

                    {/* office div */}
                    <div className="w-full h-[120px] border rounded-2xl p-3">
                        <div><span className="text-2xl font-semibold"><FontAwesomeIcon icon={faLocationDot} size="sm" /> Office</span></div>
                        <div><div className="text-xl">WildQuest Travel Services</div><div className="text-lg text-gray-600 ">Shastri Nagar, Jaipur, Rajasthan 302016</div></div>
                    </div>

                    {/* business hrs */}
                    <div className="w-full h-[120px] border rounded-2xl p-3">
                        <div><span className="text-2xl font-semibold"><FontAwesomeIcon icon={faClock} size="sm" /> Business Hours</span></div>
                        <div><div className="text-lg text-gray-600 ">Monday - Friday 09:00 AM - 07:00 PM</div><div className="text-lg text-gray-600 ">Saturday 09:00 AM - 08:00 PM</div></div>
                    </div>

                </div>



                <form onSubmit={SubmitUser} className="border border-gray-500 bg-amber-200 w-[800px] h-full rounded-2xl p-5 flex flex-col gap-5">
                    {/* for text message */}
                    <div >
                        <div className="text-3xl font-bold mb-1.5">Send us a Message</div>
                        <p>Fill out the form below and we'll get back to you as soon as possible</p>
                    </div>

                    {/* first row */}
                    <div className="conrow gap-5 flex justify-between">
                        <div className="w-full">
                            <label for="name" className="font-semibold">Full Name *</label>
                         <input id="name" className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[50px] text-xl placeholder:text-lg " onChange={updateUser}  type="text" placeholder="Enter your full name" name="name" value={name} ></input>

                        </div>


                        <div className="w-full">
                            <label for="name" className="font-semibold">Email Address *</label>
                         <input id="email" className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[50px] text-xl placeholder:text-lg"  onChange={updateUser}  type="email" placeholder="Enter your email" name="email" value={email} ></input>

                        </div>
                        
                         
                    </div>

                    {/* second row */}
                    <div className="conrow gap-5 flex justify-between">

                        
                        <div className="w-full">
                            <label for="ph" aria-required className="font-semibold">Phone Number *</label>
                         <input id="ph" className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[50px] text-xl placeholder:text-lg " onChange={updateUser}  type="text" placeholder="Enter your number" name="contact" value={contact} ></input>

                        </div>


                        <div className="w-full">
                            <label for="subject" className="font-semibold">Subject *</label>
                          <select id="subject" onChange={updateUser} name="subject" value={subject}  className="outline-0 pl-5 border border-gray-500 rounded-xl bg-transparent w-full h-[50px] text-xl">
                            <option className="text-lg text-gray-500">Selact a Subject</option>
                            <option>General Inquiry</option>
                            <option>Booking Assitence</option>
                            <option>Custom Package</option>
                            <option>Group Booking</option>
                            <option>Complaint</option>
                            <option>Feedback</option>
                        </select>

                        </div>
                        

                       
                    </div>


                    <div className=" w-full flex flex-col">
                            <label for="textarea" className="font-semibold">Message *</label>
                         <textarea id="textarea" name="masg" onChange={updateUser}  placeholder="Tell us about your travel plans or any questions you have..."   value={masg}  className="h-[150px] p-2 border border-gray-500 rounded-xl bg-transparent w-full  text-[16px] outline-0"></textarea><br/>

                        </div>

                    

                    <button type="submit" className="bg-amber-300 h-[50px] w-full rounded-xl text-xl font-semibold hover:bg-green-400"><FontAwesomeIcon icon={faPaperPlane} /> Send Message</button>

                { msg ? <div className="text-2xl " ><span>Thank You</span> <span className="text-2xl font-bold">{name}</span> <span>Your Message Sent Succesfully we'll get back to you as soon as possible!</span> </div> : null }

                </form>

            </div>
        </div>
    )
}

export default Contact;