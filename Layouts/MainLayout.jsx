import { Outlet } from "react-router"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import LoadingSpinner from "../Components/PageLoadingSpinner"

const MainLayout = () => {
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