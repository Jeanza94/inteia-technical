import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/hola",
    element: <h1>hola</h1>
  }
]







export const router = createBrowserRouter(routes)

