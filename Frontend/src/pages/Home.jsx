import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FeaturedDevicesCarousel from "../components/FeaturedDevices";

export default function Home(){
    return<>
    <Navbar />
    <Hero />
    <Categories />
    <FeaturedDevicesCarousel />
    </>
}