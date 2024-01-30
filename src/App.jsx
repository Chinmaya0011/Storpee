import './App.css';
import Header from './Components/Header';
import { MyProvider } from './Context/MyContext';
import Products from './Components/Products';
import SearchItems from './Components/SearchItems';
import Cart from './Components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import CategoryList from './Components/CategoryList';
import ProductList from './Components/ProductList';
import Buy from './Components/Buy';
import Footer from './Components/Footer';
function App() {
  return (
    <MyProvider>
      <Router>
        <div className="app-container">
          <Header />
          <CategoryList /> {/* Rendered here */}
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/searchItems" element={<SearchItems />} />
            <Route path="/:cat" element={<ProductList />} /> {/* Define route parameter for category */}
            <Route path="/buy" element={<Buy />} />

          </Routes>
          <Footer/>
        </div>
      </Router>
    </MyProvider>
  );
}

export default App;
