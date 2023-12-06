import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const liHoveredColor =
    "hover:text-red-300 hover:underline underline-offset-8";

  return (
    <div>
      <div>
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
              <Link to={`contact`} className={liHoveredColor}>
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-24">
        <Outlet />
      </div>
    </div>
  );
}
