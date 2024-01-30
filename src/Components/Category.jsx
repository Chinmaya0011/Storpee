import React, { useState } from 'react';
import CategoryList from './CategoryList';
import ProductList from './productList';

function Category() {
    const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category

    const handleCategorySelect = (cat) => {
        setSelectedCategory(cat);
    };

    return (
        <div>
            <CategoryList onCategorySelect={handleCategorySelect} />
            <ProductList selectedCategory={selectedCategory} /> {/* Pass selected category as prop */}
        </div>
    );
}

export default Category;
