'use client'

import Button from "./components/ui/Button";
import Scene from "./components/Scene";
import CharaGrid from "./components/ui/CharaGrid";
import Footer from "./components/Footer";
import Image from "next/image";
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
          <Image
            src="/HeaderDivider.png"
            alt="divider"
            width={9999}
            height={0.5}
            className="m-20"
          />
        </div>
        <div className="flex w-full justify-center items-center">
          <h1 className="text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#c89c3c30] from-49% via-[#C89B3C] via-50% to-[#c89c3c30] px-8">HEXTECH CHAMPIONS</h1>
        </div>
        <CharaGrid />
        <div className="flex w-full justify-center items-center">
          <h1 className="text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#c89c3c30] from-49% via-[#C89B3C] via-50% to-[#c89c3c30] ">History and Properties</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center w-full p-12 mx-5">
          <div className="flex w-2/3  md:w-1/2">
            <p className="text-slate-400 text-center text-sm p-5">In the Arcane timeline, Hextech is a fairly new technology for its setting, having been created by aspiring inventors Viktor and Jayce. Its widespread use led to the creation of the Hexgates, a realm-warping device able to transport airships across Runeterra in an instant.
            Crystals are shown to be extremely volatile and easily explode from just a little bit of impact. Jayce and his partner Viktor were able to refine these crystals and turn them into hextech gemstones—small, sphere shaped crystals (similar in appearance to blue marbles) that could endure great amounts of impact without reacting violently. With the creation of these hextech gemstones, they could be wielded safely by the common man and used to power up portable hextech devices.</p>
            </div>
        </div>
      <Footer />
      </div>
    </div>

  );
}