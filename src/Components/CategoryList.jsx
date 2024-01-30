import React, { useContext } from 'react';
import { MyContext } from '../Context/MyContext';
import { Link } from 'react-router-dom';
import '../Styles/Category.css';

function CategoryList({ onCategorySelect }) { // Receive onCategorySelect function as prop
    const { category } = useContext(MyContext);

    return (
        <div className="category-container">
            {category.map((cat, index) => (
                <Link to={`/${cat}`} className="nav-link" key={index} onClick={() => onCategorySelect(cat)}> {/* Call onCategorySelect function */}
                    <p className="category-item">{cat}</p>
                </Link>
            ))}
        </div>
    );
}

export default CategoryList;
