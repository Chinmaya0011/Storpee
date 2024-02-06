import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Products from '../Components/Products';
import SearchItems from '../Components/SearchItems';
import Cart from '../Components/Cart';
import { Routes, Route } from 'react-router-dom';
import About from '../Components/About';
import CategoryList from '../Components/CategoryList';
import ProductList from '../Components/ProductList';
import Buy from '../Components/Buy';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import Success from '../Components/Sucess';
import LoadingPage from '../Components/LoadingPage';
import { MyContext } from '../Context/MyContext';

function Home() {
  const { loading,login } = useContext(MyContext);
  const location = useLocation();

  return (
    <>
      {loading ||login? (
        <LoadingPage />
      ) : (
        <div className="app-container">
          <Header />
          {location.pathname !== '/cart' && location.pathname !== '/buy' && location.pathname !== '/success' && <HeroSection />}
          {location.pathname !== '/cart' && location.pathname !== '/buy' && location.pathname !== '/success' && <CategoryList />}
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/searchItems" element={<SearchItems />} />
            <Route path="/:cat" element={<ProductList />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/success" element={<Success />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
