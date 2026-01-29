import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FeaturedDevicesCarousel from "../components/FeaturedDevices";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

export default function Home(){
    return<>
    
    <Navbar />
    <Hero />
    <div className="bg-gradient-to-br from-neutral-50 via-stone-50 to-blue-400">
    <Categories />
    <FeaturedDevicesCarousel />
    </div>
    <Brands />
    <Footer />

    </>
}