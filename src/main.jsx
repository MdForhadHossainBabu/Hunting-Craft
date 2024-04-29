import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import FirebaseProvider from './Components/FirebaseProvider/FirebaseProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { Typewriter } from 'react-simple-typewriter';
import { Tooltip } from 'react-tooltip';
import { Fade } from 'react-awesome-reveal';



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <HelmetProvider>
      <FirebaseProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={router}>
          <Typewriter />
          <Tooltip />
          <Fade/>
       </RouterProvider>
      </FirebaseProvider>
    </HelmetProvider>
  </>
);
