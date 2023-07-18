import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import App from "../App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);
