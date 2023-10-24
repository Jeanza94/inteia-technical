import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { App } from '../App';
import { ProductDetailPage, ProductsPage } from '../products/pages';

const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <ProductsPage />
      },
      {
        path:"product/:slugId",
        element: <ProductDetailPage />
      }
    ],
    

  },
]

export const router = createBrowserRouter(routes)

