import React from 'react';
import { useDispatch } from 'react-redux';
import {remove} from '../features/cartSlice';

const Checkoutcard = ({id,image,price,title}) => {
    const dispatch = useDispatch();

    const handleRemove=(id)=>{
        dispatch(remove(id));
    }


  return (
    <div className='checkoutCard'>
        <div className='imageBox'>
            <img src={image}/>
            <h3>{title}</h3>
        </div>
        <div className='productCHeckout '>
            <div>Price :- <span>{price}</span></div>
            <div><button className='btn btn-primary' onClick={()=>{handleRemove(id)}}>Remove</button></div>
        </div>
    </div>
  )
}

export default Checkoutcard