import React, { useContext } from 'react';
import { MyContext } from '../Context/MyContext';

function Buy() {
    const { buy } = useContext(MyContext);

    return (
        <div>
            <div>
                <img src={buy.image} alt={buy.title} style={{ width: '200px', height: '200px' }} />
            </div>
            <div>
                <p>Title: {buy.title}</p>
                <p>Price: {buy.price}</p>
                {/* Additional elements */}
                <p>Total: {buy.price}</p>
                <p>Discount: 0%</p>
                <button>Proceed to Payment</button>
            </div>
        </div>
    );
}

export default Buy;
