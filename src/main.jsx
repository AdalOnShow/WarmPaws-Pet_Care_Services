import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from '../Routes/routes';
import AuthProvaider from '../Contexts/AuthProvaider';
import { Bounce, ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvaider>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
    </AuthProvaider>
  </StrictMode>,
)
