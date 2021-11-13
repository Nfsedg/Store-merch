import React from "react";

const Product = ({product, handleAddToCard}) => {
    return(
        <div className="Products-item">
            <img src={product.image} alt={product.title} />
            <div className="Product-item-info">
                <h2>{product.title} 
                    <span> $ {product.price}</span>
                    <p>{product.description}</p>
                </h2>
            </div>
            <button type="button" onClick={() => {handleAddToCard(product)}}>Comprar</button>
        </div>
    );
}

export { Product }