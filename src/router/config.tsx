import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { App } from '../App';
import { ProductDetailPage, ProductsPage } from '../products/pages';
import { CartPage } from '../cart/pages';

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
      },
      {
        path:"product/cart",
        element: <CartPage />
      },
      
    ],
    

  },
]

export const router = createBrowserRouter(routes)

