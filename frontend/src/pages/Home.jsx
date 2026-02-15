import React from 'react'

const Home = () => {
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
        <p class="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light font-mono text-sm ">
          Turning complex problems into elegant code. Specializing in the MERN stack to deliver scalable, high-performance web applications.
        </p>
      </div>


      <div className="col-span-1">

      </div>


    </div>
  )
}

export default Home