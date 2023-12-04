import { Link } from "react-router-dom";

export default function Home() {
  const linkText = "text-red-300 hover:text-red-400";
  return (
    <div className="mt-20 flex flex-wrap justify-center">
      <div className="w-3/6">
        <h1 className="mb-8 text-6xl text-left text-gray-400">
          <Link to={`/home`} className="hover:text-gray-300">
            Welcome!
          </Link>
        </h1>
        <p className="text-2xl leading-loose">
          I'm Julian Hernandez a Computer Science graduate passionate about
          Software Development seeking adventures. Feel free to check out the
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
