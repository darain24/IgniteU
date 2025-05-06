import React from "react";

function AboutSection() {
  return (
    <section className="flex flex-col items-center px-0 py-16 w-full h-[840px] max-w-screen-xl">
      <h2 className="mb-7 text-4xl font-bold text-black max-md:text-3xl max-sm:text-2xl">
        About Us
      </h2>
      <p className="mb-7 text-lg leading-7 text-center text-black max-md:text-base max-sm:text-sm">
        At IgniteU, we are dedicated to providing high-quality online
        education that empowers learners to achieve their goals.
      </p>
      <p className="mb-7 text-lg leading-7 text-center text-black max-md:text-base max-sm:text-sm">
        Our platform offers a wide range of courses designed by industry
        experts, ensuring you receive the best knowledge and skills.
      </p>
      <p className="mb-7 text-lg leading-7 text-center text-black max-md:text-base max-sm:text-sm">
        Join us today and start your journey towards success!
      </p>
      <div className="rounded-lg bg-zinc-300 h-[400px] w-[600px] max-md:h-[333px] max-md:w-[500px] max-sm:h-[200px] max-sm:w-[300px]" aria-label="About us image" role="img" />
    </section>
  );
}

export default AboutSection;