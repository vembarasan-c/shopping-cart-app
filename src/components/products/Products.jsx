import { useDispatch } from 'react-redux';
import productItems from './product-items';
import { cartSliceActions } from '../../store/cart-slice';

function Products() {
  const dispatch = useDispatch();

  function addItemToCart(id, title, image, gender, rate) {
    const items = {
      id,
      title,
      image,
      gender,
      price: +rate,
    };
    dispatch(cartSliceActions.addCartItem(items));
  }

  return (
    <section className=" w-full my-4 ">
      <div className="  space-y-2">
        <h1 className=" ml-2 sm:ml-5 text-left  text-3xl">Products List</h1>
        <h3 className=" text-center sm:mr-12 mb-1 sm:text-2xl text-gray-500 sm:text-bold ">
          Popular T-shirts
        </h3>
      </div>
      <ul className=" sm:ml-10  products sm:my-3 sm:justify-center ">
        {productItems.map((items) => (
          <li
            key={items.id}
            className="mx-2 w-44 md:w-48 h-72 rounded-md space-y-1  px-2 py-2  border-gray-300  border-solid  border-2  "
          >
            <img
              className=" w-full sm:w-40  h-44 object-cover "
              src={items.image}
              alt={items.title}
            />
            <p className=" text-sm text-gray-500">{items.gender}</p>
            <p className=" text-base font-medium">{items.title}</p>
            <div className=" justify-between flex ">
              <p>₹ {items.rate}</p>
              <button
                onClick={() =>
                  addItemToCart(
                    items.id,
                    items.title,
                    items.image,
                    items.gender,
                    +items.rate
                  )
                }
                className=" font-medium text-sm sm:text-base px-2  py-1 duration-100 active:py-1  active:translate-y-2  bg-slate-500 text-gray-100 shadow-sm shadow-slate-400 hover:bg-gray-700 rounded-full "
              >
                Add to cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
