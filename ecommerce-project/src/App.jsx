import axios from 'axios';
import {Routes, Route} from 'react-router'
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrderPage';
import { TrackingPage } from './pages/TrackingPage';
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
  useEffect(() => {
    loadCart();
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  
  )
}

export default App
