import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const liHoveredColor = "hover:text-red-200";
  return (
    <>
      <nav className="mt-10">
        <ul
          className="flex flex-wrap justify-center space-x-10 
          text-2xl text-sky-200"
        >
          <li>
            <Link to={`/`} className={liHoveredColor}>
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
      </div>
    </>
  );
}
