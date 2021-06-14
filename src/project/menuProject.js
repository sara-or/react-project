import React from 'react'
import './menuProject.css'
import {
    BrowserRouter as Router,
    Link
}
from 'react-router-dom';
export default function MenuProject() {
    return (
        <>
<nav class="nav nav-pills nav-justified navMenu" >
<a class="nav-item nav-link" href="#"><Link to="/contact"> צור קשר</Link></a>
  <a class="nav-item nav-link" href="#"> <Link to="/products">המוצרים שלנו</Link></a>
  <a class="nav-item nav-link" href="#">   <Link to="/about">אודות</Link></a>
  <a class="nav-item nav-link "><Link to="/">דף הבית</Link></a>
</nav>
</>
    )
}
