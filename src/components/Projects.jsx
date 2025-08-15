import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth > 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    console.log('object');
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
    console.log('object');
  };

  console.log(currentIndex);

  return (
    <div
      id="Projects"
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{' '}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mx-auto mb-8">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="cursor-pointer p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="" />
        </button>
        <button
          onClick={nextProject}
          className="cursor-pointer p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="" />
        </button>
      </div>
      <div className="overflow-hidden">
        <div
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
          className="flex gap-8 transition transform duration-500 ease-in-out"
        >
          {projectsData.map((item, idx) => (
            <div key={idx} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img src={item.image} alt="" />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-gray-500 text-sm">
                    {item.price} <span className="px-1"> | </span> {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
