import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (

  <nav class="navbar" role="navigation" aria-label="main navigation" >
  <div class="navbar-brand">
    <a class="navbar-item is-size-3	" href="/">
      Squid
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    

    <div class="navbar-end">
          <a class="navbar-item" href="contact">Contact Us</a>
          <hr class="navbar-divider" />

          <a class="navbar-item" href="about">About Us </a>
          <a class="navbar-item" href="products">Products</a>
          <a class="navbar-item" href="shop">Shop</a>
    </div>
  </div>
</nav>



  // <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  //   <div class="navbar-brand">
  //   <div class="navbar-menu">
  //     <a class="navbar-item" href="/">Squid
  //     </a>
    
  //     <div class="navbar-end">

  //       <a class="navbar-item" href="about/">
  //         About Us
  //       </a>

  //       <a class="navbar-item" href="products">
  //         Products
  //       </a>

  //       <a class="navbar-item" href="shop">
  //         Shop
  //       </a>
  //       <a class="navbar-item" href="contact">
  //         Contact Us
  //       </a>
  //     </div>
  //   </div>



  //   </div>
  // </nav>
 
  // <header>
    
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
