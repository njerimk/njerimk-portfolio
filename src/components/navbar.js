import React from 'react';


export default function NavBar(props) {




    return (  
        <div className="navbar is-primary h-20">

            <div className="container z-0 w-full font-mono fixed bg-white border-gray-200">   
                    <ul className="flex flex-row cursor-pointer justify-end p-4">
                          <li><a href="#home-page" className="p-4 hover:pointer">Home</a></li>
                          <li><a href="about-page" className="p-4 hover:pointer">About</a></li>
                           <li><a href="#work-page" className="p-4 hover:pointer">Work</a></li>
                           <li><a href="#resume-page" className ="p-4 hover:pointer">Resume</a></li>
                        
                        
                    </ul>
                </div>
       
            </div>
    )
}
