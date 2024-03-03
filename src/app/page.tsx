import HeroSection from "../Components/HeroSection"
import FeaturedSection from "../Components/FeaturedSection"
import { StickyScrollRevealDemo } from "@/Components/Sticky_scroll"
import{MovingCards} from '../Components/Testimonies'
import Webinars from "@/Components/Webinars"
import Instructors from "@/Components/Instructors"
import Footer from "@/Components/Footer"
import { MacbookScrollDemo } from "@/Components/macbook-scroll"
export default function Home() {
  return(
   <main className=" min-h-screen bg-black/[0.96] antialiased ">
   
    <HeroSection/>
    <FeaturedSection/>
    <StickyScrollRevealDemo/>
    <MovingCards/>
    <Webinars/>
    <Instructors/>
    <MacbookScrollDemo />
    <Footer/>
    
   </main>
  )
}
