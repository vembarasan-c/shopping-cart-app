import { useDispatch, useSelector } from 'react-redux';
import carticon from '/assets/images/cart-icon.png';

import { Link } from 'react-router-dom';
import { cartSliceActions } from '../store/cart-slice';

function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  function handleCartUi() {
    dispatch(cartSliceActions.cartUi());
  }

  return (
    <header>
      <section className=" w-full py-2 bg-gray-100 mb-[2.5px] gap-2 md:gap-64 justify-between flex  text-nowrap  sm:text-xl  ">
        <h1 className=" ml-3 text-2xl text-left">
          T-SHIRTS <span className="text-lg">Store </span>
        </h1>

        <div className="flex gap-1 md:gap-10">
          <Link
            onClick={handleCartUi}
            className="px-2 flex justify-center rounded-md bg-slate-300 mr-2 "
          >
            <img className=" w-8 h-8 p-1 " src={carticon} alt="cart-icon" />
            <span className=" text-base pr-1 ">({totalQuantity})</span>
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
