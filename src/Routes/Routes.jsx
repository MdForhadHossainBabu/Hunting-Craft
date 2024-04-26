import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import ArtCraft from "../Layout/Art&Craft/ArtCraft";
import Home from "../Layout/Home/Home";
import AddCraft from "../Layout/AddCraft/AddCraft";
import MyArtCraftList from "../Layout/MyArtCraftList/MyArtCraftList";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import ProtectedRoutes from "../Components/ProtectedRoutes/ProtectedRoutes";

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
        loader: () => fetch('http://localhost:5000/craft'),
      },

      {
        path: '/addCraft',
        element: <AddCraft />,
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
        path: '/myCraftList',
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
    ],
  },
]);
