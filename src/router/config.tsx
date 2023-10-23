import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { App } from '../App';
import { ProductsPage } from '../products/pages';



const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <ProductsPage />
      }
    ],
    

  },
]

export const router = createBrowserRouter(routes)

