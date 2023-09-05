import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import App from "./App.jsx";
import AboutUsSection from "./components/pages/AboutUs";
import Home from './components/Home';
import Search from './components/Search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/aboutus",
        element: <AboutUsSection />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);