import { useRef } from "react"
import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/navbar"
import Ads from "../advertisments/ads"
import AllCategory from "../all category/allcategory"
import HotOffers from "../hot offers/hot offers"
import PopularItems from "../popular items/popularitems"
import TodaysDeals from "../today's deals/today's deals"






function MainPage(){


    const allcategory =useRef(null)
    const popularitems = useRef(null)
    const todaysdeals = useRef(null)
    const ads =useRef(null)
    const hotoffers =useRef(null)
    const footer =useRef(null)

   


    return(
        <div className="vh-auto  ">
            <div className="fixed-top  h-auto   w-100  ">
                <Navbar 
                allcategory={allcategory}
                popularitems ={popularitems}  
                todaysdeals ={todaysdeals}
                ads ={ads}
                hotoffers={hotoffers}
                footer={footer}          
            /></div>            
            <div className="vh-auto  pt-5  " ref={allcategory}   >           
                <AllCategory/>                        
             </div>
             
            <div className=" vh-auto mt-5 " ref={popularitems} >
                <PopularItems/>
            </div>
            <div className="vh-auto mt-5  " ref={ todaysdeals } >
                      <TodaysDeals/>
            </div>
            <div className=" vh-auto mt-5  " ref={ads} >
                <Ads/>              
            </div>

            <div className="vh-auto mt-5   " ref={hotoffers} >
                <HotOffers/> 
            </div>

            <div className="vh-auto mt-5 " ref={footer} >
                <Footer/>

            </div>



            
            
        </div>
        
        
        
    )
}


export default MainPage
