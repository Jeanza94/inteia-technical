import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { App } from '../App';
import { ProductDetailPage, ProductsPage } from '../products/pages';
import { CartPage } from '../cart/pages';
import { HomePage } from '../shared/pages';

const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "products",
        element: <ProductsPage />
      },
      {
        path:"products/:slugId",
        element: <ProductDetailPage />
      },
      {
        path:"products-cart",
        element: <CartPage />
      },
      
    ],
    

  },
]

export const router = createBrowserRouter(routes)

