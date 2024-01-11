import React from "react";
import AllCategory from "../all category/allcategory";
import Navbar from "../../components/navbar/navbar";
import TodaysDeals from "../today's deals/today's deals";
import GiftCards from "../gift cards/gift cards";





function MainPage(){


    return(
        <div>
            <div className="navbar-section">
                <Navbar/>
            
            </div>
            <div className="first-page-section section id={}" >
                <AllCategory/>
                
                
            </div>
            <div className="today's-deals-section mt-5  section id={todaysdeals}" >
                <TodaysDeals/>
                
            </div>
            <div className="hot-deals-section section mt-5 id={hotoffers}">
              
            
            </div>
            <div className="ads-section section id={#menuitems}">
              
                
            </div>
            <div className="popular-items-section section id={}">
                
            </div>
            <div className="footer-section section id={}">
                
                
            </div>
        </div>

        
        
        
    )
}


export default MainPage
