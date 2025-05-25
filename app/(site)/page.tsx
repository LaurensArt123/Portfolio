import Image from "next/image";
import Navbar from "@/components/Navigation";
import HeroImage from "@/components/Header";
import Portfolio from "@/components/Portfolio";
export default function Home() {
  return (
  <div  >
    <HeroImage />
    <Portfolio />
  </div>
  );
}
