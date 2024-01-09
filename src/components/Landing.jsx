import { Link } from 'react-router-dom';

function Landing() {
  return (
    <section className=" mt-1 flex bg-slate-300 ">
      <div className="land-image text-nowrap w-full sm:h-[620px] h-96    sm:object-cover sm:w-full ">
        <div className=" ml-3 h-56 text-left  sm:my-36 sm:mx-20 ">
          <h3 className=" my-3 text-2xl sm:text-5xl">T-shirts Collections</h3>
          <p className="  my-3 text-xl  sm:text-3xl">Get up to 30% off</p>
          <p className="my-3 text-lg sm:text-2xl mb-5  "> New Arrivals </p>
          <p>
            <Link
              to="products"
              className=" text-slate-200 bg-cyan-900 px-8 py-[9px] rounded-2xl "
            >
              Shop Now
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landing;
