import game from "/game-ss.png";
import js from "/js.svg";
import { useState } from "react";
import ShowProject from "./ShowProject";

export default function Projects() {
  const [displayImg, setDisplayImg] = useState();

  const CloseImage = () => {
    setDisplayImg(null);
  };
  return (
    <>
      {displayImg && <ShowProject image={game} CloseImage={CloseImage} />}
      <div className="flex flex-wrap justify-center w-full space-x-20 ">
        <div
          className="border-double border-4 border-zinc-500 p-7 "
          id="game-ss.png"
          onClick={() => {
            setDisplayImg(game);
          }}
        >
          <div className="">
            <a
              href="https://github.com/julian-hzd/the-legend-game"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-yellow-100 "
            >
              The Legend
            </a>
            <p className="italic mt-4 text-zinc-300">Platformer game</p>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-5">
            <button className="border-2 my-4 bg-zinc-700">&lt; &gt;</button>
            <img src={js}></img>
          </div>
        </div>
      </div>
    </>
  );
}
