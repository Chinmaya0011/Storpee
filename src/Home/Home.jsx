import React, { useContext } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Products from '../Components/Products';
import SearchItems from '../Components/SearchItems';
import Cart from '../Components/Cart';
import About from '../Components/About';
import CategoryList from '../Components/CategoryList';
import ProductList from '../Components/ProductList';
import Buy from '../Components/Buy';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import Success from '../Components/Sucess';
import LoadingPage from '../Components/LoadingPage';
import { MyContext } from '../Context/MyContext';
import AddProducts from '../Admin/AddProducts';
import AdminDashboard from '../Admin/AdminDashboard';
import AdminUpdateProduct from '../Admin/AdminUpdateProduct';

function Home() {
  const { loading, login } = useContext(MyContext);

  if (loading || login) {
    return <LoadingPage />;
  }

  const user = localStorage.getItem('user');
  const admin = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <CategoryList />
      <Routes>
        {user && (
          <>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/searchItems" element={<SearchItems />} />
            <Route path="/:cat" element={<ProductList />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/success" element={<Success />} />
          </>
        )}
        {admin && admin.user.email === 'imchinu17@gmail.com' && (
          <>
            <Route path="/addproduct" element={<AddProducts />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/adminUpdateProduct" element={<AdminUpdateProduct />} />
          </>
        )}
        {!user && <Navigate to="/login" />}
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
