import React from "react";

function Hero() {
  const handleExploreCourses = () => {
    window.location.href = "/courses";
  };

  return (
    <section className="flex justify-center items-center px-4 py-20 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white text-center">
      <div className="text-center text-white max-w-3xl">
        <h2 className="text-5xl font-bold max-md:text-4xl max-sm:text-3xl leading-tight">
          Unlock Your Potential
        </h2>
        <p className="mx-0 my-5 text-lg max-md:text-base max-sm:text-sm leading-relaxed">
          Join our interactive platform to learn new skills and advance your career. 
          Whether you're a beginner or an expert, we have courses tailored to your needs. 
          Start your journey today and achieve your goals with us.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-md hover:bg-blue-100 transition hover:underline cursor-pointer"
          onClick={handleExploreCourses}
        >
          Explore Courses
        </button>
      </div>
    </section>
  );
}

export default Hero;
