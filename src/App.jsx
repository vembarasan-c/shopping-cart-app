import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import Main from './components/Main';
import Navbar from './components/Navbar';
const About = lazy(() => import('./components/About'));
const CartItems = lazy(() => import('./components/products/Cart'));
const Products = lazy(() => import('./components/products/Products'));
const Contact = lazy(() => import('./components/Contact'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      { index: true, element: <Main /> },
      {
        path: '/products',
        element: (
          <Suspense fallback={<p className="loading">Loading... </p>}>
            <Products />
          </Suspense>
        ),
      },

      {
        path: '/about',
        element: (
          <Suspense fallback={<p className="loading">Loading.... </p>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<p className="loading">Loading... </p>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/cart-items',
        element: (
          <Suspense fallback={<p className="loading">Loading... </p>}>
            <CartItems />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
