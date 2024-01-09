function About() {
  return (
    <section id="about bg-slate-200 w-full ">
      <h1 className="ml-3 text-3xl mt-5  mb-4 ">About</h1>
      <div className="  about-image w-full sm:font-medium text-slate-100  gap-9  mb-4  flex ">
        <div className="  ml-2 sm:ml-24 about-text  space-y-5 align-middle mt-20 w-96  sm:mt-40  sm:w-[600px] ">
          <p className="sm:text-xl ">
            T-SHIRT
            <span className="sm:text-lg ml-2">
              store is a budget friendly clothing store that has colorful and
              trendy pieces for men and women.
            </span>
          </p>
          <p className=" sm:text-lg">
            T-shirt store is a great spot to find trendy and stylish threads and
            designed t-shrits.
            <br />
            With their high-quality pieces and reasonable prices, you'll be sure
            to find something that speaks to you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
