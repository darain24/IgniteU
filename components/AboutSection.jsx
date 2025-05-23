import React from "react";
import Image from "next/image";

function AboutSection() {
  return (
    <section className="flex flex-col items-center px-0 pt-16 pb-32 w-full min-h-[840px] max-w-screen-xl mb-16">
      <h2 className="mb-8 text-4xl font-bold text-black max-md:text-3xl max-sm:text-2xl">
        About Us
      </h2>
      <p className="mb-8 text-xl leading-8 text-center text-black max-md:text-lg max-sm:text-base max-w-4xl px-4">
        Welcome to IgniteU, where we transform online education through
        exceptional learning experiences. Our passion lies in crafting courses
        that ignite curiosity and empower learners to reach their fullest
        potential. From web development to data analytics, digital marketing to
        cybersecurity – each course is a masterpiece crafted by industry
        visionaries who bring real-world expertise to your learning journey.
        What makes us special is our commitment to excellence. Through hands-on
        projects, interactive case studies, and real-world assignments, we
        ensure you don't just learn – you master your craft. Join our vibrant
        community of learners, where ideas flourish and success stories are
        born. With lifetime access to cutting-edge materials and continuous
        updates, your potential knows no bounds.
      </p>
      <Image
        src="/Images/about-image.png"
        alt="Students collaborating in a modern learning environment"
        width={600}
        height={400}
        className="rounded-lg max-md:w-[500px] max-md:h-[333px] max-sm:w-[300px] max-sm:h-[200px]"
        priority
      />
    </section>
  );
}

export default AboutSection;
