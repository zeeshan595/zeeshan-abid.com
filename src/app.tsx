import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/not-found';
import { useEffect } from 'react';

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
  function getRandomColors() {
    const randomSum = 610 + Math.round(Math.random() * 10);
    const r = 200 + Math.round(Math.random() * 10);
    const g = 200 + Math.round(Math.random() * 10);
    const b = randomSum - (r + g);
    return `rgba(${r}, ${g}, ${b}, 1)`;
  }

  // handle background color change
  useEffect(() => {
    const color1 = getRandomColors();
    const color2 = getRandomColors();
    document.body.style.backgroundColor = `${color2};`;
    document.body.style.background = `linear-gradient(90deg, ${color1} 0%, ${color2} 100%)`;
  }, []);

  return (
    <div
      className="mx-4 flex-col gap-4 my-18 items-center"
      style={{ maxWidth: '600px', minWidth: '370px' }}
    >
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}
