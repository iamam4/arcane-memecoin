"use client"
import { BackdropBlur } from "./components/HeroSection";
import { Coin } from "./components/HeroSection";
import Scene from "./components/3d/Scene";
import HeroSection from "./components/HeroSection";
import Divider from "./components/ui/Divider";
import CharaGrid from "./components/CharaGrid";
import History from "./components/History";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <BackdropBlur />
      <Coin />
      <Scene />
      <HeroSection />
      <Divider />
      <CharaGrid />
      <History />
      <Footer />
    </>

  );
}