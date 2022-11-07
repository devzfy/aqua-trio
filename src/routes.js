import {
    createBrowserRouter,
  } from "react-router-dom";

import {
    Home,
    News
} from "./pages";

  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/news",
        element: <News/>
    }
])