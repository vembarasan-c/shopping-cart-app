import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className=" mb-2   py-2  flex sm:justify-evenly justify-center gap-10  text-amber-100 bg-gray-900 mt-2 ">
      <div className=" text-lg ">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>

          <li>
            <Link to="about"> About</Link>
          </li>
          <li>
            <Link to="products"> Products</Link>
          </li>
        </ul>
      </div>

      <div className=" mt-3 text-center">
        <p>
          <span>&copy;</span> 2024 | All rights reserved.
        </p>
        <p> Developed by - Vembarasan </p>
      </div>

      {/* <p>I will add more features in the future </p> */}
    </footer>
  );
}

export default Footer;
