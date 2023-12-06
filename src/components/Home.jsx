import { Link } from "react-router-dom";

export default function Home() {
  const linkText = "text-red-300 hover:text-red-400";
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-3/6 drop-shadow-2xl">
        <h1 className="mb-8 text-6xl text-left text-gray-400">
          <Link to={`/home`} className="hover:text-gray-300">
            Welcome!
          </Link>
        </h1>
        <p className="text-2xl leading-loose">
          I'm{" "}
          <span className="text-purple-100 hover:text-purple-300">
            Julian Hernandez
          </span>{" "}
          a Computer Science graduate passionate about{" "}
          <span className="text-gray-400 hover:text-gray-600">
            Software Development
          </span>
          , seeking adventures. Feel free to check out the
          <Link to={`/projects`} className={`${linkText}`}>
            {" "}
            projects{" "}
          </Link>{" "}
          I have worked on and{" "}
          <Link to={`/contact`} className={`${linkText}`}>
            {" "}
            reach out!
          </Link>
        </p>
      </div>
    </div>
  );
}
