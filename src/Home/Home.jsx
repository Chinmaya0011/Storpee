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
import Success from '../Components/Sucess';

function Home() {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <CategoryList />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/searchItems" element={<SearchItems />} />
        <Route path="/:cat" element={<ProductList />} />
        <Route path="/buy" element={<Buy />} />
        <Route path='/success' element={<Success />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
