import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";

import About from "../pages/About";
import Contact from "../pages/Contact";

import Footer from "../components/Footer";
import Courses from "../pages/Courses";

function Layout() {
  return (
    <>
      <Navbar />
      <div
        className="container mx-auto flex flex-row justify-center items-center gap-5"
        style={{ height: "100vh" }}
      >
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "about", element: <About /> },
      { path: "contact-us", element: <Contact /> },
    ],
  },
]);
function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default Router;
