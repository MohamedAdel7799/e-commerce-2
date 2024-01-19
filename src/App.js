import './App.css';
import React from 'react';
import MainPage from './pages/mainpage/mainpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllCategory from './pages/all category/allcategory';
import PopularItems from './pages/popular items/popularitems';
import TodaysDeals from './pages/today\'s deals/today\'s deals';
import GiftCards from './pages/gift cards/gift cards';




function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}>
          <Route path='allcategory'    element={<AllCategory/>} ></Route>
          <Route path='popularitems'   element={<PopularItems/>} ></Route>
          <Route path='todayes_deals'  element={<TodaysDeals/>}></Route>
          <Route path='giftcards'      elemnts={<GiftCards/>} ></Route>
          <Route path='menu_items'     element={<menuitem/>}></Route>
        </Route>
      </Routes>
     
          
     
     
    </div>
  );
}

export default App;
