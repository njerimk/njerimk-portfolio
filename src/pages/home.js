import React from 'react'
import MainBG from '../old_cpu-04.png'

export default function Home() {
    return( 

    <div className="grid grid-rows-2 grid-cols-4 justify-center" id="home-page">
          <div className="row-start-1 row-span-2 col-start-1 col-span-4">
            <img className="z-1 ml-auto inline-block" src={MainBG} alt="main-bg-art"></img>
          </div>
          <div className="mt-20 font-san mx-auto row-start-1 row-span-1 col-start-1 col-span-2 z-0 rounded border p-4 bg-white">
            <p className="text-xl/8">Hi, my name is,</p>
            <h1 className="font-sans text-5xl text-pink-400 ">Njeri Kamau.</h1>
            <h1 className="py-3 font-sans text-5xl text-green-500">
              I create things for the web.
            </h1>
         
            <p className="text-xl">
              I am a software engineer based in the DMV specializing <br></br> in building and designing web applications.<br>
              </br>
            </p> 
            <a href="mailto:nmurugikamau@gmail.com">    
              <button className="text-md py-3 px-6 rounded-full text-white mt-8 border-solid bg-purple-300 border-2 border-purple-400">
                Get In Touch
              </button>
            </a> 
            </div>
            </div>
            )

        }
    