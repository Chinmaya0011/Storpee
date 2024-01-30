import React, { createContext, useContext, useState, useEffect } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [showProducts, setShowProducts] = useState(true);
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const [loading, setLoading] = useState(false); // Loading state
  const [cart, setCart] = useState([]);
const[buy,setBuy]=useState([])
  const handleBuy=(product)=>{
setBuy(product)
  }


  // Define the updateQuantity function outside of addToCart
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching products and categories
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false); // Set loading to false after fetching products
      });

    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => {
        setCategory(json);
        setLoading(false); // Set loading to false after fetching categories
      });
  }, []);

  useEffect(() => {
    setLoading(false); // Set loading to true when fetching products based on category
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then(res => res.json())
        .then(json => {
          setProducts(json);
          setLoading(false); // Set loading to false after fetching products based on category
        });
    } else {
      setLoading(true); // Set loading to false if no category is selected
    }
  }, [selectedCategory]); // Add selectedCategory as a dependency

  
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
  
    if (existingItem) {
      // Call updateQuantity if item already exists in the cart
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  
  
  const removeFromCart = (productId) => {
    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingIndex].quantity > 1) {
        updatedCart[existingIndex].quantity -= 1; // Decrease quantity if more than 1
      } else {
        updatedCart.splice(existingIndex, 1); // Remove item if quantity is 1
      }
      setCart(updatedCart);
    }
  };
  
  const clearCart = () => {
    setCart([]);
  };
  const searchProducts = (searchItem) => {
    setLoading(true); // Set loading to true when searching products
    const results = products.filter(product => product.title.toLowerCase().includes(searchItem.toLowerCase()));
    setSearchResults(results); // Update search results state
    setLoading(false); // Set loading to false after searching products
    return results;
  };

  return (
    <MyContext.Provider value={{handleBuy,buy,cart,
      addToCart,
      removeFromCart,
      clearCart, loading, setLoading, products, category, selectedCategory, setSelectedCategory, showProducts, setShowProducts, searchProducts, searchResults,updateQuantity }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
