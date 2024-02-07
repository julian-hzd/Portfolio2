import { useState } from "react";
import ShowProject from "./ShowProject";
import projects from "../Data/projects.js";

export default function Projects() {
  const [displayImg, setDisplayImg] = useState();

  const CloseImage = () => {
    setDisplayImg(null);
  };
  return (
    <>
      {displayImg && <ShowProject image={displayImg} CloseImage={CloseImage} />}
      {projects.map((project) => {
        return (
          <div
            className="flex flex-wrap justify-center w-full space-x-20 "
            key={project.title}
          >
            <div
              className="border-double border-4 border-zinc-500 p-7 hover:bg-gray-800 cursor-pointer"
              onClick={() => {
                setDisplayImg(project.image);
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
                <button className="border-2 my-4 bg-zinc-700">&lt; &gt;</button>
                <img src={project.languages}></img>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
