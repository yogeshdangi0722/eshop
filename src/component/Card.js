import React from 'react';
import { Link } from 'react-router-dom';
import {add} from '../features/cartSlice';
import { useDispatch } from 'react-redux';

const Card = ({id,category,description,image,price,rating,title}) => {

  const dispatch = useDispatch();
  

  const handleAdd = (product)=>{
    dispatch(add(product));
  }
 

 


  const product= {id,category,description,image,price,rating,title}
  return (
    <article className='product'>
    <div className='img-container'>
    <img src={image} alt={title} />
    </div>
    
    <div className='product-footer'>
    <h3>{title.slice(0,15 )}</h3>
    <div className='priceTag'>
    <label >Price</label><span>{price}</span>
    </div>
    <div className='priceTag'>
    <span>Rating</span>
    <span>{rating.rate} rated by  {rating.count}</span>
    </div>

    <p>{description.slice(0,30)+'...'}</p>
    <div className='card__Button'>
    <Link to={`/productpage/${id}`} className='btn btn-primary btn-details'>Details</Link>
    <button className='btn btn-primary btn-details' onClick={()=>{handleAdd(product)}}>Add to cart</button>
    </div>
    </div>
    </article>

  )
}

export default Card