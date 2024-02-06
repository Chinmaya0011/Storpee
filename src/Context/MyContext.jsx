import React, { createContext, useState, useEffect, useContext } from "react";

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
  const [purchasedProductsData, setPurchasedProductsData] = useState([]);

  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setSignup] = useState(false);

  const handleLoginSuccess = () => {
    setIsLogin(true);
  };

  const handleSignupSuccess = () => {
    setSignup(true);
  };

  const handleBuy = (product) => {
    const existingProductIndex = buy.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedBuy = [...buy];
      updatedBuy[existingProductIndex].quantity += 1;
      setBuy(updatedBuy);
    } else {
      setBuy((prevBuy) => [...prevBuy, { ...product, quantity: 1 }]);
    }

    clearCart();
  };

  const updateQuantity = (productId, newQuantity) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: newQuantity,
    }));

    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategory(json);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(false);
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          setLoading(false);
        });
    } else {
      setLoading(true);
    }
  }, [selectedCategory]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
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
        updatedCart[existingIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  const removeFromBuy = (productId) => {
    setBuy((prevBuy) => prevBuy.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const searchProducts = (searchItem) => {
    setLoading(true);
    const results = products.filter((product) =>
        product.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setSearchResults(results);
    setLoading(false);
    return results;
};


  const clearBuy = () => {
    setBuy([]);
  };



  const handleProceedToBuy = (products) => {
    const newItem = [...products]; // Create a new array for newItem
    setPurchasedProductsData((prevData) => [...prevData, ...newItem]);
    // Store the purchased products data
};

const handleOrderRemove=(item)=>{
const newItem=purchasedProductsData.filter((product)=>
   product.title!=item
)
setPurchasedProductsData(newItem)
}

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
        setIsLogin,
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
        handleProceedToBuy,
        isLogin,
        isSignup,
        setSearchResults,
        handleLoginSuccess,
        handleSignupSuccess,
        purchasedProductsData,
        handleOrderRemove // Provide access to purchased products data
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
