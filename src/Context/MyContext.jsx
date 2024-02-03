import React, { createContext, useState, useEffect } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [showProducts, setShowProducts] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [buy, setBuy] = useState([]);
  const [quantity, setQuantity] = useState({});


  const[isLogin,setIsLogin]=useState(false)
  const[isSignup,setSignup]=useState(false)
  
  const handleLoginFunc=()=>{
    setIsLogin(true)
  }
  
  const handleSignupFunc=()=>{
    setSignup(true)
  }
//
const handleLoginSuccess = () => {
  setLoggedIn(true);
};

// Function to handle successful signup
const handleSignupSuccess = () => {
  setLoggedIn(true);
};
  const handleBuy = (product) => {
    // Check if the product already exists in the buy list
    const existingProductIndex = buy.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
        // If the product exists, update its quantity
        const updatedBuy = [...buy];
        updatedBuy[existingProductIndex].quantity += 1;
        setBuy(updatedBuy);
    } else {
        // If the product doesn't exist, add it to the buy list with quantity 1
        setBuy(prevBuy => [...prevBuy, { ...product, quantity: 1 }]);
    }

    // Clear the cart
    clearCart();
};


  // Define the updateQuantity function outside of addToCart
  const updateQuantity = (productId, newQuantity) => {
    // Update the quantity state for the specific product
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: newQuantity,
    }));

    // Update the cart with the new quantity
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching products and categories
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false); // Set loading to false after fetching products
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategory(json);
        setLoading(false); // Set loading to false after fetching categories
      });
  }, []);

  useEffect(() => {
    setLoading(false); // Set loading to true when fetching products based on category
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          setLoading(false); // Set loading to false after fetching products based on category
        });
    } else {
      setLoading(true); // Set loading to false if no category is selected
    }
  }, [selectedCategory]); // Add selectedCategory as a dependency

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Call updateQuantity if item already exists in the cart
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingIndex = cart.findIndex((item) => item.id === productId);
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

  // Function to remove a product from the purchase list
  const removeFromBuy = (productId) => {
    setBuy((prevBuy) => prevBuy.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const searchProducts = (searchItem) => {
    setLoading(true); // Set loading to true when searching products
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setSearchResults(results); // Update search results state
    setLoading(false); // Set loading to false after searching products
    return results;
  };

  const clearBuy = () => {
    setBuy([]); // Clear all purchased products
  };

  return (
    <MyContext.Provider
      value={{
        handleBuy,
        buy,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        loading,
        setLoading,
        products,
        category,
        selectedCategory,
        setSelectedCategory,
        showProducts,
        setShowProducts,
        searchProducts,
        searchResults,
        updateQuantity,
        clearBuy,
        removeFromBuy,
handleLoginFunc,
handleSignupFunc,
isLogin,
isSignup,
handleLoginSuccess,
handleSignupSuccess
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
