import './index.scss';
import React from 'react';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import Root from './components/root/Root.tsx';
import Modal from './components/modal/Modal.tsx';
import NotFound from './components/not-found/NotFound.tsx';
import { RoutePaths } from './ts/enums/route-paths.enum.ts';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const routes = [
  {
    element: <App />,
    children: [
      {
        path: RoutePaths.ROOT,
        element: <Root />
      },
      {
        path: RoutePaths.MODAL + '/:email',
        element: <Modal />
      }
    ],
    errorElement: <NotFound />
  }
];

const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)