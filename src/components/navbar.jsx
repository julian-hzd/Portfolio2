import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Home />}>
//       // <Route path="contact" element={<Contact />} />
//     </Route>,
//   ),
// );
//
//
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="home">~</a>
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
}
