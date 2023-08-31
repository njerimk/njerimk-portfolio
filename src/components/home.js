import React from 'react'
import MainBG from '../old_cpu-04.png'

export default function Home() {
    return( 

    <div className="pt-16 grid grid-cols-3 grid-rows-2">
          <div className="pl-8 row-start-1 row-span-2 col-start-1 col-span-3">
            <img className="" src={MainBG} alt="main-bg-art"></img>
          </div>
          <div className="m-16  row-start-1 row-span-1 pt-24 col-start-1 col-span-2">
            <p className="text-base ">Hi, my name is,</p>
            <h1 className="font-sans text-7xl sm: text-xl text-base text-pink-400 ">Njeri Kamau.</h1>
            <h1 className="py-6 font-sans text-4xl sm: text-xl text-green-500">
              I create things for the web.
            </h1>
            <p className="text-base">
              I am a software engineer based in the DMV specializing <br></br> in building and designing web applications.<br>
              </br>
            </p> 
            <a href="mailto:nmurugikamau@gmail.com">    
              <button className="text-md  py-3 px-6 rounded-full text-white mt-8 border-solid bg-purple-300 border-2 border-purple-400">
                Get In Touch
              </button>
            </a> 
            </div>
            </div>
            )

        }
    