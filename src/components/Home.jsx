import { Link } from "react-router-dom";

export default function Home() {
  const linkText = "text-red-300";
  return (
    <div className="mt-20 flex flex-wrap justify-center">
      <div className="w-4/6">
        <h1 className="mb-8 text-6xl text-left text-sky-200">Welcome!</h1>
        <p className="text-2xl leading-loose">
          I'm Julian Hernandez a Computer Science graduate passionate for
          Software Development seeking for adventures. Feel free to checkout the
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
