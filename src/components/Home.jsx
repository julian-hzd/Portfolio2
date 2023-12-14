import { Link } from "react-router-dom";

export default function Home() {
  const linkText = "text-blue-200 hover:text-blue-100";
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-3/6 drop-shadow-2xl">
        <h1 className="mb-8 text-6xl text-left text-zinc-50">
          <Link to={`/home`} className="hover:text-zinc-300">
            Welcome!
          </Link>
        </h1>
        <p className="text-2xl leading-loose">
          I&apos;m{" "}
          <span className="text-red-200 hover:text-red-100">
            Julian Hernandez
          </span>{" "}
          a Computer Science graduate passionate about{" "}
          <span className="text-zinc-300 hover:text-zinc-200">
            Software Development
          </span>
          . Feel free to check out the
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
