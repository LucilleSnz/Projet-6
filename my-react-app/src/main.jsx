import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import HomePage from './assets/pages/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
]);



createRoot(document.getElementById("root")).render(
<StrictMode>
  <RouterProvider router={router} />
</StrictMode>
);
