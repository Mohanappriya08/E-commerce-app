import './App.css'
import axios from 'axios'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router'
import {CheckoutPage} from './pages/CheckoutPage'
import {OrdersPage} from './pages/Orderspage'
import { TrackingPage } from './pages/TrackingPage'
import { useEffect,useState } from 'react'

function App() {
      const[cart,setCart] = useState([]);

      useEffect(()=>{
      axios.get(`http://localhost:3000/api/cart-items?expand=product`).then((response)=>{
        setCart(response.data);
        console.log(response.data);
    });
  },[]);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>}/>
      <Route path ="checkout" element={<CheckoutPage cart={cart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart}/>}/>
      <Route path="tracking" element={<TrackingPage/>}/>
    </Routes>
  )
}

export default App
