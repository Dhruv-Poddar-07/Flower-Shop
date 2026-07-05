import React from 'react'
import ProductCard from './ProductCard'

function ProductList({products, onAddToCart}) { // now the productList has the value of products from app , and the onAddToCart contain handleAddToCart func like if we click add to cart for product like rose , lily then the products of this component has those values

  return (
    <div id="product">
    <div className='product-grid'>
        {products.map(product => ( //map means that for every product we get from app through props , a product card will be created ,now the productcard will get value through props like it will get the value of key from id of product , and product will have the full info like name , price  of product from the products we created in app , the onAddToCart will take onAddtoCart will take another onaddtocart and we know that the value of onaddtocart which the productlist got from props of app contain handle func o indeirectly the handle func is stored in onaddtocart of list which will be sent to card through porps 

        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart}
          id="product"
        />
      ))}
    </div>
    </div>
  )
}

export default ProductList