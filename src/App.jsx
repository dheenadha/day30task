import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Componants/Navbar';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import Footer from './Componants/Footer';




const App = () => {
  const[id,setId]=useState(0)
  return (
  <div>
  <BrowserRouter>
  <div>
    <Navbar />
  </div>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/product' element={<Product setId={setId}/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path ="edit/:id" element={<Edit id={id}/>}/>
  </Routes>
  <div>
    <Footer />
  </div>
</BrowserRouter>
</div>
  );
};

export default App;