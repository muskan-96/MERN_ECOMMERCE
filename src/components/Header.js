import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './Header.css';

export function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      {/* first header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
          <span className="navbar-toggler-icon"></span>
            <h3 className="logo">Ecommerce</h3>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={!isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
              id="navbarSupportedContent"
            >
              <div className="center">
                <div className="box">
                  <input
                    type="text"
                    className="input1"
                    placeholder="Product name Category name etc..."
                  />
                  <button className="search">Search</button>
                </div>
              </div>

              <div className="log-cart">
                <a href="login.html">
                  <button className="login">login</button>
                </a>
                <a href="cart.html " className='cart'>
                  <FontAwesomeIcon className="fa-solid fa-cart-shopping fa-2x cart" icon={faCartShopping} />
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* header1 end */}
        {/* header2 starts */}
      
      </header>
      {/* header2 ends */}
    </>
  );
}

