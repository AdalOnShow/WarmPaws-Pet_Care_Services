import { Outlet } from "react-router"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import LoadingSpinner from "../Components/PageLoadingSpinner"
import Aos from "aos"
import { useEffect } from "react"

const MainLayout = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, 
    });
  }, []);

  return (
    <div className="transition duration-300">
      <Navbar />
      <LoadingSpinner />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout