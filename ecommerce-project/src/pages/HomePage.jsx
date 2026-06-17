import React from 'react';
import './HomePage.css';
import {Header} from '../components/Header';
import {products} from '../../starting-code/data/products';
import { Products } from '../components/Products';
function HomePage(){
    
    fetch(`http://localhost:3000/api/products`)
    .then((response)=>{
        return response.json()
        }).then((data)=>{
            console.log(data)
    });
    return (
    <div>
        <title>Ecommerce Project</title>
        <Header/>
        <div className="home-page">
            <div className="products-grid">
                {products.map((product,index) => 
                <Products key ={index} image = {product.image} name ={product.name} rating= {product.rating} price={product.priceCents}/>
                )}
            </div>
        </div>
    </div>
    );
}

export default HomePage;