import React, { useContext } from 'react';
import { MyContext } from '../Context/MyContext';
import { Link } from 'react-router-dom';
import '../Styles/category.css'; // Import the CSS file

function CategoryList({ onCategorySelect }) {
    const { category } = useContext(MyContext);

    const handleClick = (cat) => {
        if (typeof onCategorySelect === 'function') {
            onCategorySelect(cat);
        }
    };

    return (
        <div className="category-container">
            {category.map((cat, index) => (
                <Link to={`/${cat}`} className="nav-link" key={index} onClick={() => handleClick(cat)}>
                    <p className="category-item">{cat}</p>
                </Link>
            ))}
        </div>
    );
}

export default CategoryList;
