import React from 'react';
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


function Home() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<>
          <HeroSection /> {/* Render HeroSection on the homepage */}
          <CategoryList/>
          <Products />
        </>} />
        <Route path="/products" element={<>
          <HeroSection /> {/* Render HeroSection on the products page */}
          <CategoryList />
          <Products />
        </>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/searchItems" element={<SearchItems />} />
        <Route path="/:cat" element={<>
          <CategoryList />
          <ProductList />
        </>} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
