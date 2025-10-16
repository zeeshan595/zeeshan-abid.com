import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/not-found';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function () {
  return (
    <div
      className="mx-4 flex-col gap-4 my-18 items-center"
      style={{ maxWidth: '370px' }}
    >
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}
