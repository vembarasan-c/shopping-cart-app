import { useDispatch, useSelector } from 'react-redux';
import { cartSliceActions } from '../../store/cart-slice';
import deletebutton from '../../assets/images/delete-button.png';

import styles from './Cart.module.css';

const numberFormat = new Intl.NumberFormat();

function CartItems() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const { totalQuantity: total } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  function addItemToCart(id, price) {
    dispatch(cartSliceActions.addCartItem({ id, price }));
  }

  function removeItem(id) {
    dispatch(cartSliceActions.removeCartItem(id));
  }

  function clearItem(id) {
    dispatch(cartSliceActions.clearItem(id));
  }

  return (
    <section
      className={`${styles.cartitems}  w-[280px] border-[2px] rounded-lg border-spacing-1 border-slate-600 sm:w-[360px]  bg-gray-200 `}
    >
      <ul>
        {total === 0 && (
          <p className=" text-center mt-3  text-xl "> Empty cart items </p>
        )}

        {cartItems.map((items) => (
          <li
            key={items.id}
            className="mt-2  flex sm:w-80 gap-2   border-[3px] justify-between rounded-lg px-1 py-1 bg-gray-200  border-slate-400 "
          >
            <img
              className="w-16 h-16 bg-cover "
              src={items.image}
              alt={items.title}
            />
            <div className="space-y-2">
              <div className=" -space-y-1 ">
                <p className="  text-sm sm:font-semibold ">{items.title}</p>
                <p className="text-slate-500 text-xs sm:text-sm ">
                  {items.gender}
                </p>
              </div>
              <p className="">
                {`₹${numberFormat.format(items.price * items.quantity)}`}
              </p>
            </div>
            <div className="space-y-5 ">
              <button onClick={() => clearItem(items.id)}>
                <img
                  src={deletebutton}
                  width="18"
                  height="18"
                  alt="delete icon"
                />
              </button>
              <div className=" flex gap-[5px] text-center">
                <button
                  onClick={() => addItemToCart(items.id, items.price)}
                  className="w-5 h-5  rounded-xl bg-neutral-300 text-md  text-center "
                >
                  +
                </button>
                <span>{items.quantity}</span>
                <button
                  onClick={() => removeItem(items.id)}
                  className="w-5 h-5 rounded-xl bg-neutral-300 "
                >
                  -
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {cartItems.length > 0 && (
        <div className=" text-lg mt-6">
          <p>{`Items: ${cartItems.length} `} </p>
          <p className=" text-left">
            {`Total Price: ₹${numberFormat.format(totalPrice)}  `}
          </p>
        </div>
      )}
    </section>
  );
}

export default CartItems;
