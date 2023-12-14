import game from "/game-ss.png";
import image from "/image.png";
export default function Projects() {
  // <img src={game}></img>
  return (
    <div className="flex flex-wrap justify-center w-full space-x-20 ">
      <div className="border-double border-4 border-zinc-500 p-10">
        <div className="">
          <a
            href="https://github.com/julian-hzd/the-legend-game"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-red-300"
          >
            The Legend
          </a>
          <p className="italic mt-4">Platformer game</p>
        </div>
        <div className="flex flex-wrap justify-center items-center space-x-5">
          <button className="border-2 my-4 border-sky-600 bg-zinc-700">
            &lt; &gt;
          </button>

          <div>
            <img src={image}></img>
          </div>
        </div>
        <h2>JS</h2>
      </div>
      <div className="border-double border-4 p-10 border-zinc-500">
        <div className="">
          <a
            href="https://github.com/julian-hzd/the-legend-game"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            The Legend
          </a>
        </div>
        <button className="w-full border-dashed border-2 my-4 border-sky-600">
          &lt; &gt; Code
        </button>
        <img src={image}></img>
        <h2>JS</h2>
      </div>
    </div>
  );
}
