import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import  StorefrontIcon  from '@mui/icons-material/Storefront';
import SearchIcon  from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
const Header = () => {

  const cartProduct=useSelector((state)=>state.cartSlice);

  return (
    <div className='header'>
    
    <div className="header_logo">
    <Link to='/' className='header_logoTitle' >

    <StorefrontIcon className='header__logoImage' fontSize='large' />
    </Link> 
    <h2 className='header_logoTitle'>
    <Link to='/' className='header_logoTitle' >
    eShop
    </Link>
    </h2>
    </div>

    <div className="header_search">
    <input type="text" className='header_serchinput' />
    <SearchIcon className='header_searchIcon' />
    </div>

    <div className="header_nav">
      <div className="nav_items"><span className='nav_itemLineOne'>Hello Guest</span><span className='nav_itemLineTwo'>Sign In</span></div>
      <div className="nav_items"><span className='nav_itemLineOne'>Your</span><span className='nav_itemLineTwo'>Shop</span></div>
      <div className="itemBasket">
      <Link to='/checkout'>
      <span className='nav_itemLineOne'><ShoppingBasketIcon fontSize='large' className='basketIcon' /></span>
      </Link>

      <span className='nav_itemLineTwo nav_baketCount'>{cartProduct.length}</span></div>
    </div>
    </div>
  )
}

export default Header;