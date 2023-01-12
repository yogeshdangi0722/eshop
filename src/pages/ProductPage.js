import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../component/Loading';


const ProductPage = () => {
  const productid= useParams();
  const [productData,setProduct] = useState({});
  const [loading,setLoading] = useState(true);
  const url = 'https://fakestoreapi.com/products/';


  const fetproduct = async ()=>{
    try{

      const response = await fetch(url+productid.id);
      const data = await response.json();
      console.log(data);
      setProduct(data);
      setLoading(false);
    }catch(er){
      console.log(er);
    }
  }
  useEffect(()=>{fetproduct()},[])

  if(loading){
    return <Loading/>
  }
  

  return (
    <section className='product_section'>
    
    <h2 className='section_title'>{productData.title}</h2>

    <div className='productInfo'>
      <img src={productData.image} alt={productData.title}/ >
        <div className='product_info'>
          <p>
            <span className='product_data'>name :</span> {productData.title}
          </p>
          <p>
          <span className='product_data'>Category :</span> {productData.category}
          </p>
          <p>
            <span className='product_data'>Description :</span> {productData.description}
          </p>
          <p>
          <span className='product_data'>Price :</span> {productData.price}
          </p>
          <p>
          <span className='product_data'>rating :</span> {productData.rating.rate} by {productData.rating.count}
          </p>
        </div>
      </div>

      <div className='productinfo__button'>
      <Link to='/' className='btn btn-primary'>
      Back home
      </Link>
      <button className='btn btn-primary'>Add to cart</button>
      </div>
  </section>
  )
}

export default ProductPage