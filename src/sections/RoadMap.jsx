import React from 'react'

function RoadMap() {
  return (
<section className="relative z-10 mt-4 ">
      <img
        src="images/purple.png"
        alt=""
        className=" absolute -top-[50%] right-0 -z-10 h-[600px] hidden sm:block"
      />

      <div className="container-wrapper mb-14">
      <img
          src="images/parasuit.svg"
          alt=""
          className=" mx-auto h-[100px]  relative z-10"
        />
        <h2 className="font-groot-one text-5xl my-2 text-[#000000] text-center font-bold relative z-30 -mt-4">
         Our  Roadmap
        </h2>
     

  

        <div className="flex justify-between flex-col sm:flex-row gap-5">
          <div className="bg-[#2a4474] border-4  py-5 px-5  rounded-xl w-[100%] h-[190px] ">
            <div>
            <h1 className="font-groot-one font-bold  text-white text-center  text-xl mb-1">Phase 1</h1>
             
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7">•  Build community foundation.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7">• Do initial market research.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7">•  Launch SpongSol.</p>
          
          
          </div>

          <div className="bg-[#2a4474] border-4 py-5 px-5  rounded-xl w-[100%] h-full ">
          <div>
          <h1 className="font-groot-one font-bold  text-white text-center  text-xl mb-1">Phase 2</h1>
           
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7">• Grow community</p>
            <p  className=" text-lg font-popins font-normal lh-1_7">• Do partnerships.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7">• CMC & CG listing.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7">• Introduce Staking. .</p>
       

          </div>
          <div className=" py-5 px-5  rounded-xl w-[100%] h-[190px] bg-[#2a4474] border-4">
          <div>
          <h1 className="font-groot-one font-bold  text-white text-center  text-xl mb-1">Phase 3</h1>
             
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7">•  Open Pet Store.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7">• List on Tier 1 Exchange.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7">• Launch SpongSol Game.</p>
          

          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap