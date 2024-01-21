import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/navbar"
import Ads from "../advertisments/ads"
import AllCategory from "../all category/allcategory"
import HotOffers from "../hot offers/hot offers"
import PopularItems from "../popular items/popularitems"
import TodaysDeals from "../today's deals/today's deals"






function MainPage(){


    return(
        <div className="vh-auto  ">
            <div className="fixed-top  h-auto   w-100  "> <Navbar/> </div>
            
        
            
            <div className="vh-auto  pt-5  " id="#section1 " >
                
                <AllCategory/>
                         
             </div>
             
            <div className=" vh-auto mt-5   ">
                <PopularItems/>
            </div>
            <div className="vh-auto mt-5  ">
                      <TodaysDeals/>
            </div>
            <div className=" vh-auto mt-5  ">
                <Ads/>
                
            </div>

            <div className="vh-auto mt-5   ">
                <HotOffers/> 
            </div>

            <div className="vh-auto mt-5 ">
                <Footer/>

            </div>



            
            
        </div>
        
        
        
    )
}


export default MainPage
