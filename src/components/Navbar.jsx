import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="mt-10">
        <ul
          className="flex flex-wrap justify-center space-x-10 
          text-2xl text-sky-200 hover:text-red-50"
        >
          <li>
            <Link to={`/`}>~</Link>
          </li>
          <li>
            <Link to={`projects`}>Projects</Link>
          </li>
          <li>
            <Link to={`about`}>About</Link>
          </li>
          <li>
            <Link to={`contact`}>Contact me</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
