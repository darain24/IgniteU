import React from "react";

function DashboardCard({ imageUrl, title, description }) {

  return (
    <article className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-[405px] max-md:w-[90%] transition-transform transform hover:-translate-y-2 hover:shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-auto rounded-t-lg" />
      <h3 className="mx-0 my-4 text-xl font-semibold">{title}</h3>
      <p className="text-base text-center">{description}</p>
    </article>
  );
}

export default DashboardCard;
