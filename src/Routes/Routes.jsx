import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/Root/Root';
import ErrorPage from '../Layout/ErrorPage/ErrorPage';
import ArtCraft from '../Layout/Art&Craft/ArtCraft';
import Home from '../Layout/Home/Home';
import AddCraft from '../Layout/AddCraft/AddCraft';
import MyArtCraftList from '../Layout/MyArtCraftList/MyArtCraftList';
import Register from '../Components/Register/Register';
import Login from '../Components/Login/Login';
import ProtectedRoutes from '../Components/ProtectedRoutes/ProtectedRoutes';
import Details from '../Layout/Art&Craft/Details';
import UpdateCraft from '../Layout/MyArtCraftList/UpdateCraft';
import CraftItemDetailsUpdate from '../Layout/MyArtCraftList/CraftItemDetailsUpdate';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/art&craft',
        element: <ArtCraft />,
        loader: () =>
          fetch('https://assignment-10-server-nine-omega.vercel.app/craft'),
      },

      {
        path: '/addCraft',
        element: (
          <ProtectedRoutes>
            <AddCraft />
          </ProtectedRoutes>
        ),
      },

      {
        path: '/myCraftList',
        element: (
          <ProtectedRoutes>
            <MyArtCraftList />
          </ProtectedRoutes>
        ),
      },

      {
        path: '/myCraftList/:id',
        element: <MyArtCraftList />,
      },

      {
        path: '/register',
        element: <Register />,
      },

      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/craft/:id',
        element: <Details />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-nine-omega.vercel.app/craft/${params.id}`
          ),
      },
      {
        path: '/updateCraft/:id',
        element: <UpdateCraft />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-nine-omega.vercel.app/craftItem/${params.id}`
          ),
      },
      {
        path: '/craftItem/:id',
        element: <CraftItemDetailsUpdate />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-nine-omega.vercel.app/craftItem/${params.id}`
          ),
      },
    ],
  },
]);
