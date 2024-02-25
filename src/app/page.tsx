import HeroSection from "../Components/HeroSection"
import FeaturedSection from "../Components/FeaturedSection"
import { StickyScrollRevealDemo } from "@/Components/Sticky_scroll"

export default function Home() {
  return(
   <main className=" min-h-screen bg-black/[0.96] antialiased ">
    <HeroSection/>
    <FeaturedSection/>
    <StickyScrollRevealDemo/>
   </main>
  )
}
