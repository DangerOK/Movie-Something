import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";


// fat arrow doesnt require return method
// const Header = () => (
//   <header>
//     <h1>Sweet Pumpkins</h1>
//   </header>
// )


function Header() {
  return(

    <header>
      <Link to='/'>
        <h1>Movie-Something</h1>
      </Link>
    </header>
  )
}

export default Header;
