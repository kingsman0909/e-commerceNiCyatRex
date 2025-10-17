import React from 'react'
import { MdMenu } from "react-icons/md"; 
import logo from './logo.svg';
import {useState} from 'react';

const Header = (props) => {
  const [active, setActive] = useState('');
  const [showProfBar, setProfBar] = useState(false);
  
  const handleClick = (item) => {
    setActive(item);
    props.showPage(item);
    setTimeout(() => setActive(""), 80); // remove after 150ms
  };
  return (
    <div className='header'>
      <div className='menu'>
        <div className='menu-bar'>
            <ul className="menu-list">
              <li className={active === 'home' ? 'active' : ''} onClick={()=>{handleClick('home')}}><a>🏠 Home</a></li>
              <li className={active === 'shop' ? 'active' : ''} onClick={()=>{handleClick('shop')}}><a>🛍 Shop</a></li>
              <li className={active === 'Wishlist' ? 'active' : ''} onClick={()=>{handleClick('Wishlist')}}><a>❤️ Wishlist</a></li>
              <li className={active === 'Cart' ? 'active' : ''} onClick={()=>{handleClick('Cart')}}><a>🛒 Cart</a></li>
              <li className={active === 'Orders' ? 'active' : ''} onClick={()=>{handleClick('Orders')}}><a>📦 Orders</a></li>
            </ul>
        </div>
      </div>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h1>E-Commerce</h1>
      </div>
      <div className='prof-menu'>
        <h3 onClick={() => {setProfBar(!showProfBar)}}>Profile</h3>
        <div className='prof-bar' style={{display:showProfBar ? 'flex' : 'none'}}>
          <ul>
            <li className={active === 'Profile' ? 'active' : ''} onClick={()=>{handleClick('Profile')}}><a>👤 Profile</a></li>
            <li className={active === 'Settings' ? 'active' : ''} onClick={()=>{handleClick('Settings')}}><a>⚙️ Settings</a></li>
            <li className={active === 'Logout' ? 'active' : ''} onClick={()=>{handleClick('Logout')}}><a>🚪 Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
