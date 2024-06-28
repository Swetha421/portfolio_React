import React from 'react'

const Home = () => {
  return (
    <div className='bg-blue-200'>
      <div id="home" className="inline-flex">
        <div className="mt-60 font-bold ml-52">             
           <p className="text-3xl">Hello, I am</p>
           <p className="text-6xl "> SWETHA P S</p><br/>
           <button className=" border-2 bg-slate-300 mt-28">Download CV</button>
        </div> <br/><br/><br/>
    
        <div>
        <img  src="me.jpeg" alt="" className=" mt-48 rounded-full ml-96 w-[500px] shadow-2xl shadow-indigo-500/40"/>
    </div>
</div>
    </div>
  )
}

export default Home
