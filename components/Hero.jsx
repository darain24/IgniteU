import React from "react";

function Hero() {
  return (
    <section className="flex justify-center items-center px-0 py-20 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white py-20 text-center">
      <div className="text-center text-white ">
        <h2 className="text-5xl font-bold max-md:text-4xl max-sm:text-3xl">
          Unlock Your Potential
        </h2>
        <p className="mx-0 my-5 text-lg max-md:text-base max-sm:text-sm">
          Join our interactive platform to learn new skills and advance your
          career.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-md hover:bg-blue-100 transition">
          Explore Courses
        </button>
      </div>
    </section>
  );
}

export default Hero;
