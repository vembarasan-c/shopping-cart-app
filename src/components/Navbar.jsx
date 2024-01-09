import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Navbar.module.css';
import Header from './Header';
import CartItems from './products/Cart';
import { useSelector } from 'react-redux';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const cartOpen = useSelector((state) => state.cart.cartOpen);

  const toggleActiveClass = () => {
    setIsActive((prevsState) => !prevsState);
  };

  const toggleRemove = () => {
    setIsActive((prevsState) => !prevsState);
  };

  return (
    <>
      <Header />
      {cartOpen && <CartItems />}

      <div>
        <nav className={`${styles.navbar}`}>
          <ul
            className={` ${styles.navMenu} ${isActive ? styles.active : ''} `}
          >
            <li>
              <Link onClick={toggleRemove} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={toggleRemove} to="about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={toggleRemove} to="products">
                Products
              </Link>
            </li>
            <li>
              <Link onClick={toggleRemove} to="contact">
                Contact
              </Link>
            </li>
          </ul>

          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
