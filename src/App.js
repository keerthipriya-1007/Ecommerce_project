
import React from  'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Mobilepage from './pages/MobilePage'
import MobileSingles from './Singles/MobilesSingle';
import UserCart from './components/UserCart';
import Computerpage from './pages/Computerpage';
import Furniturepage from './pages/Furniturepage';
import Bookspage from './pages/Bookspage';
import Kitchenpage from './pages/Kitchenpage';
import Watchespage from './pages/Watchespage';
import Womanclothingpage from './pages/Womanclothingpage';
import Menclothingpage from './pages/Menclothingpage';
import Login from './components/Login';
import Register from './components/Register';
import BooksSingle from './Singles/BooksSingle';
import ComputerSingle from './Singles/ComputerSingle';
import FurnitureSingle from './Singles/FurnitureSingle';
import KitchenSingle from './Singles/KitchenSingle';
import MenclothingSingle from './Singles/MenclothingSingle';
import WatchesSingle from './Singles/WatchesSingle';
import WomanclothingSingle from './Singles/WomanclothingSingle';


function App() {
  return (
  <>
  <Router>
  <div className="App">
  
     <Routes>
      <Route index element={<Home />}/>
     <Route path='/home' exact element={<Home/>} />
      <Route path='/about' exact element={<About/>} />
      <Route path='/cart' exact element={<UserCart/>} />
      <Route path='/mobiles' exact element={<Mobilepage/>} />
      <Route path='/mobiles/:id' element={<MobileSingles />} />
      <Route path='/furniture' exact element={<Furniturepage/>} />
      <Route path='/furniture/:id' element={<FurnitureSingle />} />
       <Route path='/computers' exact element={<Computerpage/>} />
      <Route path='/computers/:id' element={<ComputerSingle />} />
      <Route path='/kitchen' exact element={<Kitchenpage/>} />
      <Route path='/kitchen/:id' element={<KitchenSingle />} />\
      <Route path='/Watches' exact element={<Watchespage/>} />
      <Route path='/Watches/:id' element={<WatchesSingle />} />
      <Route path='/Woman' exact element={<Womanclothingpage/>} />
      <Route path='/Woman/:id' element={<WomanclothingSingle />} />
      <Route path='/Men' exact element={<Menclothingpage/>} />
      <Route path='/Men/:id' element={<MenclothingSingle />} />
     
      <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
     {/* <Route path='/books' exact element={<Bookspage/>} />
      <Route path='/books/:id' element={<BooksSingle />} />
      
         <Route path='/login' exact element={<Login/>} />
     
 */} 
  
  

    </Routes>  
  
  
    </div>
</Router>
 </>

  )

}

export default App


