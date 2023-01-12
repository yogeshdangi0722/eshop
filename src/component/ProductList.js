import React,{useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import { getProducts } from "../features/getData";
import Card from './Card';
import Loading from './Loading';

const ProductList = () => {
  
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  }, [] );

  const {productList,isLoading}= useSelector((state)=>state.fetchProduct);
  if(isLoading){
    return <Loading />;
  }
  return (
    <div>
        <section className='section'>
        <div className='product-center'>
        {productList.map((item)=>{return <Card key={item.id}{...item} />})}
        </div>
        </section>
    </div>
  )
}

export default ProductList