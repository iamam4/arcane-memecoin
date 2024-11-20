'use client'

import Button from "./components/Button";
import Model from "./components/Model";
// import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (

    <div>
      <div>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#554023] to-[#c99846]  text-5xl p-5 w-fit">$ARCANE</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex w-full justify-center items-center">
          <Model />
        </div>
 

        <div className="flex flex-col justify-center items-center w-full gap-8">
          <div>
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#554023] to-[#c99846] text-5xl text-center">Arcane Hextech Crystal</h2>
          </div>
          <Button />
          <div className="flex justify-center items-center w-full">
            <p className="text-slate-300 text-center w-7/12 text-base">The Magic and Tech Power in Hextech CRYSTAL <br></br>
              Inspired by the legendary Hextech Crystal from the universe of Arcane and League of Legends, our memecoin fuses the power of magic with the innovation of blockchain technology. With $arcane, we bring a touch of mysticism and humor to the crypto ecosystem while connecting gamers and tech enthusiasts alike. Join the adventure and fuel your crypto journey</p>
          </div>
        </div>
      </div>
    </div>

  );
}