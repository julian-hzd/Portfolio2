import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Projects from "../components/Projects";

const nav = (
  <nav>
    <ul>
      <li>
        <a href="/">~</a>
      </li>
      <li>
        <a href="projects">Projects</a>
      </li>
      <li>
        <a href="About">About</a>
      </li>
      <li>
        <a href="Contact me">Contact me</a>
      </li>
    </ul>
  </nav>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

export default function Navbar() {
  return (
    <>
      {nav}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
