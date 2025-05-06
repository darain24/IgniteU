import React from "react";

function CourseCard({ imageUrl, title, description }) {

  return (
    <article className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-[405px] max-md:w-full max-md:max-w-[600px] max-sm:w-full max-sm:max-w-[400px]">
      <div>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[160px] object-cover rounded-t-lg"
        />
      </div>
      <h3 className="mx-0 my-4 text-xl font-bold text-black">{title}</h3>
      <p className="mb-4 text-base text-center text-black">{description}</p>
      <a
        href="#"
        className="text-base text-blue-600 hover:text-blue-800 transition-colors"
      >
        Enroll Now
      </a>
    </article>
  );
}

export default CourseCard;
