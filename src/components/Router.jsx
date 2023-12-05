import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import Projects from "./Projects";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Home from "./Home";

export default function Router() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>,
        ),
      )}
    ></RouterProvider>
  );
}
