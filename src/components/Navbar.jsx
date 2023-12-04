import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const liHoveredColor =
    "hover:text-red-300 hover:underline underline-offset-8";

  return (
    <div className="m-4">
      <nav className="mt-10">
        <ul
          className="flex flex-wrap justify-center space-x-10 
          text-xl text-gray-200"
        >
          <li>
            <Link to={`home`} className={`${liHoveredColor} text-3xl`}>
              ~
            </Link>
          </li>
          <li>
            <Link to={`projects`} className={liHoveredColor}>
              Projects
            </Link>
          </li>
          <li>
            <Link to={`about`} className={liHoveredColor}>
              About
            </Link>
          </li>
          <li>
            <Link to={`contact`} className={liHoveredColor}>
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
        <h1>Footer</h1>
      </div>
    </div>
  );
}
