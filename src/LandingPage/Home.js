import React from "react"
import BannerOne from "./BannerOne"
import BannerTwo from "./BannerTwo"
import Navbar from "./Navbar"

const Home = () =>{
    return(
        <div>
            <Navbar/>
            <BannerOne />
            <BannerTwo/>
        </div>
    )
}
export default Home;