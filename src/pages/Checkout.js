import React from 'react';
import { useSelector } from 'react-redux';
import Checkoutcard from '../component/Checkoutcard';

const Checkout = () => {

  const cartProduct=useSelector((state)=>state.cartSlice);

  function calTotalPrice(){
    let totalPrice = 0;
    for(let i=0;i<cartProduct.length;i++){
        totalPrice = totalPrice+cartProduct[i].price;
    }
    return totalPrice.toFixed(2);

  }

  const totalPrice = calTotalPrice();

  return (
    <main className='container'>
        <div className='checkoutItem'>
          {
            cartProduct.map((product)=>{
              return <Checkoutcard key={product.id} {...product} />
            })
          }
        </div>
        <div className='totalAmount'>
          <h3>Total amount-----</h3>
          <p>{totalPrice}</p>
        </div>
    </main>
  )
}

export default Checkout