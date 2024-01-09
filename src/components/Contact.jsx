import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../store/cart-slice';

function Contact() {
  const dispatch = useDispatch();
  const onSubmitForm = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userData = Object.fromEntries(data.entries());
    dispatch(cartSliceActions.getUserData(userData));
  };

  return (
    <section className="mr-auto ">
      <h1 className=" mt-5 mb-3 text-3xl ml-4">Contact</h1>
      <div className="pb-3    bg-slate-200 text-left flex sm:justify-evenly justify-between  ">
        <div className="mt-5">
          <h3 className="  text-xl sm:font-bold ">Contact Us:</h3>
          <div className=" mt-6 space-y-2 sm:text-lg ">
            <p>
              <span className=" sm:font-semibold">Address: </span>
              11 North street Chennai
            </p>
            <p>
              <span className=" sm:font-semibold ">Phone: </span>
              +91 9876543216
            </p>
            <p>
              <span className=" sm:font-semibold ">Email: </span>
              tshirtstore@gmail.com
            </p>
          </div>
        </div>
        <div className="  mt-5">
          <h1 className="  sm:font-bold  text-xl">Get in touch:</h1>
          <form onSubmit={onSubmitForm} className=" text-gray-90 contact-page">
            <input type="text" placeholder="Name" name="name" required /> <br />
            <input type="email" placeholder="Email" name="email" required />
            <br />
            <input type="text" placeholder="Subject" name="subject" required />
            <br />
            <textarea
              name="comment"
              placeholder="Message"
              id="1"
              cols="18"
              rows="2"
              required
            ></textarea>
            <br />
            <button className=" text-xs text-gray-200 px-[6px] py-[7px] bg-slate-600 rounded-lg ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
