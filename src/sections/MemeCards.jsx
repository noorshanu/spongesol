import React from "react";
import RoadmapCards from "../components/RoadmapCards";

function MemeCards() {
  return (
    <div className=" container-wrapper py-4 px-4 mx-auto">
     
      <h2 className="font-groot-one text-5xl my-2 text-[#ffffff] text-center font-bold relative z-30">
      Our Products
        </h2>
     

      <div className=" flex items-center gap-4 justify-between flex-col sm:flex-row">
      
        <div className=" w-full">
            <p className=" font-groot-one text-xl sm:text-3xl text-white font-semibold  py-2">
            SpongeSol isn't your average meme coin - he's the next viral meme! 
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-two text-white  font-medium">
              1. SpongSol Game: Dive into underwater gaming fun with SpongSol and friends!
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-two  text-white font-medium">
              2. SpongSol NFTs: Collect rare and adorable NFTs featuring your favorite characters.
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-two text-white font-medium">
              3. Staking: Earn rewards effortlessly! Support SpongeSol and hodl for rewards.

            </h1>
            <h1 className=" text-xl sm:text-2xl py-3 font-groot-two text-white font-medium">
              3. Meme Creation: Laugh non-stop with our hilarious memes! Join the fun in the solana jungle!

            </h1>
          </div>
       

        <div className=" max-w-full sm:max-w-xl">
          <RoadmapCards/>

        </div>
      </div>
    </div>
  );
}

export default MemeCards;
