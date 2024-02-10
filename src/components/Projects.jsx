import { useState } from "react";
import ShowProject from "./ShowProject";
import projects from "../Data/projects.js";

export default function Projects() {
  const [displayImg, setDisplayImg] = useState();
  // Add more projects,
  // MAUI Farm containers app
  // Budget thing
  // etc...

  const CloseImage = () => {
    setDisplayImg(null);
  };
  let clickedRepo = false;
  return (
    <>
      {displayImg && <ShowProject image={displayImg} CloseImage={CloseImage} />}
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => {
          return (
            <div
              className="flex flex-wrap justify-center ml-8 w-80"
              key={project.title}
            >
              <div
                className="border-double border-4 border-zinc-500 p-7 hover:bg-gray-800 cursor-pointer"
                onClick={() => {
                  if (!clickedRepo) setDisplayImg(project.image);
                  else clickedRepo = false;
                }}
              >
                <div className="">
                  <a
                    href="https://github.com/julian-hzd/the-legend-game"
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl text-yellow-100 "
                  >
                    {project.title}
                  </a>
                  <p className="italic mt-4 text-zinc-300">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center items-center space-x-5">
                  {project.technologies.map((lang) => {
                    return <img src={lang} key={lang}></img>;
                  })}
                </div>
                <a
                  href={project.git}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    clickedRepo = true;
                  }}
                >
                  <button className="border-2 my-4 bg-zinc-700">
                    &lt;/&gt;
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
