import React from 'react'
import NavBar from "./components/navbar"
import CartonCo from "./Portfolio Site/Screen Shot 2021-03-05 at 11.07.57 AM.png"
import SailorCards from "./Portfolio Site/SailorSenshiCover.png"
import Github from "./Portfolio Site/25231.png"
import Youtube from "./Portfolio Site/yt_icon.png"
export default function Work() {
    return (
        <>
        <NavBar/>
        <div className="grid grid-rows-5">
                <div className="p-24 grid grid-flow-col block grid-col-5 grid-rows-1">
                    <div className="row-start-1 row-span-1 col-start-1 col-span-2 pb-4">
                        <h1 className="font-mono inline mr-2 text-3xl text-pink-400 ">03.</h1>
                        <h1 className="font-san inline text-4xl ">Work </h1> 
                    </div>
                     <div className="text-right row-start-2 row-span-1 col-start-2 col-span-2 p-10 z-10">
                        <h3 className="font-mono ml-2 text-pink-400"> Featured Project</h3>
                        <h3 className="font-san inline text-2xl">Carton Co.</h3>
                    </div>
                    <div className="text-right p-2 mt-28 col-start-2 col-span-2 row-start-2 row-span-2 z-0">
                        <p className="ml-48 font-san text-xl bg-pink-300 w-98 text-white rounded border p-10">
                            A web app for comic artists to share their stories and create a fanbase and find
                            their community
                        </p>
                        <div className="row-start-4 row-span-1 col-start-3 col-span-2 mx-50">
                        <p className="p-2 font-mono text-xs text-gray-400 tracking-widest mb-4">
                            React.js  *   Material UI  *  Rails
                        </p> 
                        <a href="https://github.com/njerimk/sailor-cards">
                            <img className="w-6 inline mr-4" src={Github} alt="github-icon"></img>
                        </a>
                        {/* <a href="https://github.com/njerimk/sailor-cards">
                            <img className="w-5 inline" src={External} alt="external-link" ></img>
                        </a> */}
                        <a href="https://youtu.be/gZPPItakwJE">
                            <img className="w-8 inline" src={Youtube} alt="external-link" ></img>
                        </a>
                    </div>   
                    </div>
                    <div className="row-start-2 row-span-2 col-start-1 col-span-2 rounded border p-4">
                         <img className="z-2" src={CartonCo} alt="cartonco"></img>  
                          
                    </div>
                    
                    
                </div>
                <div className="p-24 grid grid-flow-col block grid-col-5 grid-rows-1">
                     <div className="text-left row-start-2 row-span-1 col-start-1 col-span-2 p-10 pl-2">
                        <h3 className="font-mono text-pink-400"> Featured Project</h3>
                        <h3 className="font-san inline text-2xl">Sailor Senshi Cards</h3>
                    </div>
                    <div className="text-left p-2 mt-28 col-start-1 col-span-2 row-start-2 row-span-2 z-0">
                        <p className="mr-48 font-san text-xl bg-pink-300 w-98 text-white rounded border p-4">
                            A matching card game with a Sailor Moon Theme
                        </p>
                        <div className="row-start-3 row-span-1 col-start-1 col-span-1 pl-4">
                        <p className="p-2 font-mono text-xs text-gray-400 tracking-widest mb-4">
                            React.js  *   Bootstraps  *  Rails
                        </p>
                        <a href="https://github.com/njerimk/sailor-cards"><img className="mr-4 w-6 inline" src={Github} alt="sailor-cards-git-logo"/>
                        </a>
                        {/* <a href="https://github.com/njerimk/sailor-cards">
                            <img className="w-5 inline" src={External} alt="sailor-cards-presentation" />
                        </a> */}
                        <a href="https://youtu.be/zJ36CZlbZ6g">
                            <img className="w-8 inline" src={Youtube} alt="external-link" ></img>
                        </a>
                    </div>   
                    </div>
                    <div className="ml-24 row-start-2 row-span-2 col-start-2 col-span-2 z-1 rounded border">
                         <img className="z-2" src={SailorCards} alt="sailorcards"></img>   
                    </div>
                    

                </div>

         
            </div>
        </>
    )
}
