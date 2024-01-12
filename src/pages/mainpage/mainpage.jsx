import React from "react";
import AllCategory from "../all category/allcategory";
import Navbar from "../../components/navbar/navbar";
import TodaysDeals from "../today's deals/today's deals";
import GiftCards from "../gift cards/gift cards";
import HotOffers from "../hot offers/hot offers";
import Footer from "../../components/footer/footer";
import Ads from "../advertisments/ads";
import PopularItems from "../popular items/popularitems";





function MainPage(){


    return(
        <div>
            <div className="navbar-section">
                <Navbar/>
            
            </div>
            <div className="first-page-section section " >
                <AllCategory/>
                
                
            </div>
            <div className="today's-deals-section mt-5  section " >
                <TodaysDeals/>
                
            </div>
            <div className="hot-deals-section section mt-5 ">
               <HotOffers/>  
            
            </div>
            <div className="ads-section section mt-5  ">
              
                <Ads/>
            </div>
            <div className="popular-items-section section ">
                <PopularItems/>
            </div>
            <div className="footer-section section ">
                <Footer/>
                
            </div>
        </div>

        
        
        
    )
}


export default MainPage
