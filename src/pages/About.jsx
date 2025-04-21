import React from "react";

function About() {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="state">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
        consequatur assumenda deserunt vel, numquam quae nesciunt expedita?
        Architecto, doloremque est voluptatibus quas iure quaerat nam.
        Perferendis iusto aliquam laborum culpa.
      </p>
    </>
  );
}

export default About;
