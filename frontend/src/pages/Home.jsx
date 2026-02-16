import { TbBrandUpwork } from "react-icons/tb"; 
import { SiFreelancer } from "react-icons/si"; 
import { SiFiverr } from "react-icons/si"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { BsGithub } from "react-icons/bs"; 
import { HiDocumentDownload } from "react-icons/hi"; 
import { AiOutlineArrowRight } from "react-icons/ai"; 
import React, { useReducer } from 'react'

const Home = () => {
  let initscreen={
    git: false,
    link:false,
    fiverr: false,
    freelancer: false,
    upwork: false
  }

  const reducer = (state,action)=>{
    
  }
  let [screen,dispatch]=useReducer(reducer,initscreen)

  return (
    <div className='text-white min-h-[93vh] flex items-center justify-center px-8 grid grid-cols-2' id='home'>
      <div className="w-full max-w-2xl col-span-1">
        {/* <h1 className="text-6xl font-bold leading-tight">
          Hi, I'm Burhanuddin.<br />
          I build full-stack<br />
          <span className="bg-gradient-to-r from-white via-slate-400 to-slate-500 bg-clip-text text-transparent">
            solutions.
          </span>
        </h1> */}
        <h1 className="anim gard text-5xl font-bold comic-relief-bold">
          Hi, I am <br />
          <span className='text-7xl'>Burhanuddin.</span><br />
          I build Full-Stack Solutions
        </h1>
        <p class="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light font-mono my-4 text-sm ">
          Turning complex problems into elegant code. Specializing in the MERN stack to deliver scalable, high-performance web applications.
        </p>

        <div className="mx-4 flex gap-4 h-[7vh] items-center justify-start">
          <button className="p-3 bg-blue-600 rounded-sm flex items-center gap-2 hover:shadow-blue-300 hover:scale-105 transition-all shadow-lg cursor-pointer active:scale-100 w-[25%] justify-center">
            View Projects <AiOutlineArrowRight />
          </button>
          <a href="/Burhanuddin_Ali_Asghar_CV_ModernVariant.pdf" download className="w-[25%]">
          <button className="p-3 bg-none border-white border-2 rounded-sm flex items-center gap-2 hover:shadow-blue-300 hover:scale-105 transition-all shadow-lg cursor-pointer active:scale-100 justify-center">
            Get CV <HiDocumentDownload />
          </button>
          </a>
        </div>
      </div>


      <div className="col-span-1">
          <div className="container border-[0.1px] border-white shadow-lg shadow-blue-100 w-full aspect-square">
            <div className="h-[80%]"></div>
            <div className="h-[20%] border-t-2 border-white p-4 grid grid-cols-5">
              <div className="col-span-1 flex items-center justify-center text-3xl">
                <BsGithub />
              </div>
              <div className="col-span-1 flex items-center justify-center text-3xl">
                <AiFillLinkedin />
              </div>
              <div className="col-span-1 flex items-center justify-center text-3xl hover:text-blue-700">
                <SiFiverr />
              </div>
              <div className="col-span-1 flex items-center justify-center text-3xl hover:text-blue-700">
                <SiFreelancer />
              </div>
              <div className="col-span-1 flex items-center justify-center text-3xl hover:text-blue-700">
                <TbBrandUpwork />
              </div>
            </div>
          </div>
      </div>


    </div>
  )
}

export default Home