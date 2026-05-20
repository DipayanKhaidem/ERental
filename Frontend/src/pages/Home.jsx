import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FeaturedDevicesCarousel from "../components/FeaturedDevices";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import Login from "../components/Login";

export default function Home({isLoggedIn, openLogin}){
    return<>
    
    
    <Hero />
    <div className="bg-gradient-to-br from-neutral-50 via-stone-50 to-blue-400">
    <Categories isLoggedIn={isLoggedIn} openLogin={openLogin} />
    <FeaturedDevicesCarousel isLoggedIn={isLoggedIn} openLogin={openLogin} />
    </div>
    <Brands />
    

    </>
}