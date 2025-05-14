import React from "react";
import Link from "next/link";

function CourseCard({ id, imageUrl, title, description }) {

  return (
    <article className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-[405px] max-md:w-full max-md:max-w-[600px] max-sm:w-full max-sm:max-w-[400px]">
      <div>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[160px] object-cover rounded-lg"
        />
      </div>
      <h3 className="mx-0 my-4 text-xl font-bold text-black">{title}</h3>
      <p className="mb-4 text-base text-center text-black">{description}</p>
      <Link
        href={`/checkout?courseId=${id}&title=${encodeURIComponent(title)}`}
        className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Buy Now
      </Link>
    </article>
  );
}

export default CourseCard;
