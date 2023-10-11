import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App';
import Home from "./routes/Home";
import Repository from "./routes/Repository";
import About from "./routes/About";
import ErrorPage from "./routes/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "repository",
        element: <Repository  />,
      },
      {
        path: "about",
        element: <About/>,
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router = {router} />
  </React.StrictMode>
);
