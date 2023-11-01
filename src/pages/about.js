import React from 'react'
import BioPhoto from '../BioPhoto.JPG'

export default function About(props) {
    

    return (
        <div className="w-4/5 rounded border border-2 border-pink-300 m-10 grid grid-rows-1 grid-cols-2" id="about-page">
            <div className="h-0.5 col-start-2 col-span-1 row-start-1 row-span-1">
                <h1 className="font-mono inline text-3xl text-pink-400">02.</h1>
                <h1 className="font-san inline text-4xl">About Me</h1>
            </div> 
            <div className="w-1/2 mt-20 rounded border-2 border-pink-300 p-5 mb-10 col-start-2 col-span-1 row-start-1 row-span-1">
                
                <img className="max-w-sm filter grayscale hover:grayscale-0 rounded-lg" src={BioPhoto}></img>   
            </div>
            <div>              
                <p className="text-2xl m-40 font-san col-start-1 col-span-1 row-start-2 row-span-1 mb-20">
                    Hello! My name is Njeri (sounds like 'Jeri') and I am a software engineer residing in Maryland. 
                    I enjoy creating things for the web (applications and illustrations)
                </p>
            </div>  
        </div>


    )
}
