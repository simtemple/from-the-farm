import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../styles/images/pig-logo.png'


export const Header = () => {
  return (
    <header>
      {/* <Link to="/profile"><i className="fas fa-bacon"></i></Link> */}
      <div className="container">
        <div className="header-logo">
          <h1>from<span>the</span>farm</h1>
          <img id="logo" src={image} alt="from the farm cute pig logo"/>
        </div>
        <div className="menu">
          <i className="fas fa-carrot"></i>
          <i className="fas fa-user-circle"></i>
          <i className="fas fa-plus-circle"></i>
          <i className="fas fa-leaf"></i>
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </header>
  )
}