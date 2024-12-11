import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import '../Styles/ProductPage.css';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleAddToCart = (product, button) => {
        dispatch(addToCart(product));
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 500);
    };

    const calculateGST = (price) => {
        return (price * 0.18).toFixed(2);
    };

    return (
        <div className="product-page">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>GST: ${calculateGST(product.price)}</p>
                    {cartItems.find(item => item.id === product.id) ? (
                        <button>Go to Cart</button>
                    ) : (
                        <button 
                            onClick={(e) => handleAddToCart(product, e.currentTarget)}
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductPage;