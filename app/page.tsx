'use client'

import Button from "./components/ui/Button";
import Scene from "./components/Scene";
import CharaGrid from "./components/ui/CharaGrid";
import "./globals.css";

export default function Home() {
  return (

    <div>
      <div className="absolute top-[500px] right-[-250px] w-[250px] h-[400px] bg-[#395D8B] blur-[450px] opacity-70 rounded-[118px] z-[-9999]"></div>
      <div className="absolute top-[-250px] left-[-125px] w-[250px] h-[400px] bg-[#395D8B] blur-[450px] opacity-70 rounded-[118px] z-[-9999]"></div>
      <div className="relative z-0">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#c99846] to-[#554023] text-5xl p-5 w-fit">$ARCANE</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex w-full justify-center items-center">
          <Scene />
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-8">
          <div>
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#081428] from-49% via-[#08C8B9] via-50% to-[#081428] text-[3.5em] text-center">Hextech Crystal</h2>
          </div>
          <Button />
          <div className="flex justify-center items-center w-full">
            <p className="text-slate-400 text-center w-7/12 text-sm">The Magic and Tech Power in Hextech CRYSTAL <br></br>
              Inspired by the legendary Hextech Crystal from the universe of Arcane, our memecoin fuses the power of magic with the innovation of blockchain technology. With $arcane, we bring a touch of mysticism to the crypto ecosystem while connecting gamers and tech enthusiasts alike. Join the adventure and become part of the legend !</p>
          </div>
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent from-49% via-[#937341] via-50% to-transparent to-100% m-20"></div>
        </div>
        <div className="flex w-full justify-center items-center">
          <h1 className="text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#c89c3c30] from-49% via-[#C89B3C] via-50% to-[#c89c3c30]">HEXTECH CHAMPIONS</h1>
        </div>

        <CharaGrid />
      </div>
    </div>

  );
}