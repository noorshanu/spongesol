function Hero() {
  return (
    <section className=" pt-8  pb-[4rem] ">
      <div className="container-wrapper">
        <h1 className=" font-groot-one text-2xl text-center sm:text-5xl font-semibold my-4 max-w-full sm:max-w-5xl mx-auto text-[#000]">
          SpongeSol is all about Memes, Cuteness, and Solana Jungle Adventure!
        </h1>
        <div className="relative z-50">
          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" w-full">
              <img src="images/hero2.png" alt="" />
            </div>

            <div className=" max-w-2xl bg-[#42e2e7c5] py-8 px-4 rounded-3xl border-2 border-[#ffc93b]">
              <h2 className=" text-lg text-black font-semibold">
                Meet Bongo Cat: the next meme sensation in the wild world of
                crypto. Think you've seen it all with Shiba, Baby Doge, and our
                dear froggy friend Pepe? Think again. Here comes a feline with
                rhythm, ambition, and a dream to join the meme coin hall of
                fame. Why should dogs and frogs have all the fun? Introducing
                Bongo Cat ($BONGO)
              </h2>
              <div className=" py-2">
                <a
                  href="https://solscan.io/token/5f65PYwzhSEHfDBqMdqJoQnHyQVMnWQuiVzG7WaX4gu9"
                  target="_blank"
                  className="my-2 font-groot-two flex justify-start text-xs  text-black  sm:text-xl font-bold "
                >
                  {" "}
                  Contract : 5f65PYwzhSEHfDBqMdqJoQnHyQVMnWQuiVzG7WaX4gu9
                </a>
              </div>

              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
                <a
                  href="https://t.me/spongesoll"
                  target="_blank"
                  className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#e8e6c9] shadow-lg shadow-black/40 text-[#473314]  font-bold border-[#ffc93b] border-2"
                >
                  join telegram
                </a>

                <a
                  href="https://www.dextools.io/app/en/solana/pair-explorer/4RWrhM81MtAEedgZw51EnUeJWXJyfdYWXZ3XpYHHaomc?t=1710748472452"
                  target="_blank"
                  className="text-base py-2 uppercase font-sushi-one px-10 rounded-xl bg-[#e8e6c9] shadow-lg shadow-black/40 text-[#473314]  font-bold  border-[#ffc93b] border-2"
                >
                  DEXTOOLS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
