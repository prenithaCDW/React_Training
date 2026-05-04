import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Destination from "./pages/Destination/Destination.jsx";
import ComingSoon from './pages/ComingSoon/ComingSoon.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:placeId" element={<Destination />} />
        <Route path="/hotels" element={<ComingSoon title="Hotels" />} />
        <Route path="/rentals" element={<ComingSoon title="Rentals" />} />
        <Route path="/restaurants" element={<ComingSoon title="Restaurants" />} />
        <Route path="*" element={<NotFound />} />       
      </Routes>
    </BrowserRouter>
  )
}

export default App;
