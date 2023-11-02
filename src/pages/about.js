import React from 'react'
import NjeriBioPic from '../NjeriBioPic.png'

export default function About(props) {
    

    return (
        <div className="w-5/6 font-mono m-auto rounded border border-2 border-pink-300 mt-10 grid grid-rows-1 grid-cols-2 gap-4 grid-column:auto" id="about-page">
            <div className="h-auto m-10 col-start-1 col-span-1 row-start-1 row-span-1">
                <h1 className="font-mono inline text-3xl text-pink-400">02.</h1>
                <h1 className="font-mono inline text-3xl">About Me</h1>
            </div> 
            <div className="h-auto m-auto col-start-2 col-span-1 row-start-1 row-span-1 z-index: 3">
                
                <img className="h-96 object-contain z-index:2" src={NjeriBioPic}></img>   
            </div>
            <div className="mt-20 h-0.5 col-start-1 col-span-1 row-start-1 row-span-1">              
                <p className="text-2xl p-10 m-auto font-san">
                    Hello! My name is Njeri (sounds like 'Jeri') and I am a software engineer residing in Maryland. 
                    I enjoy creating things for the web (applications and illustrations)
                </p>
            </div>  
        </div>


    )
}
