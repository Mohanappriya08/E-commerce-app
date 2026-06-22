import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import './HomePage.css';
import { Header } from '../../components/Header';
import { Products } from './ProductsGrid';
function HomePage({ cart }) {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get(`http://localhost:3000/api/products`);
            setProducts(response.data);
        }
        getHomeData();
    }, []);


    return (
        <div>
            <title>Ecommerce Project</title>
            <Header cart={cart} />
            <div className="home-page">
                <div className="products-grid">
                    {products.map((product, index) =>
                        <Products key={index} image={product.image} name={product.name} rating={product.rating} price={product.priceCents} id={product.id}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomePage;