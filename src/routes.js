import {
    createBrowserRouter,
  } from "react-router-dom";

import {
    Home,
    News,
    SingleNew,
    CulturalFigures,
    FigureSingle
} from "./pages";

  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/news",
        element: <News/>
    },
    {
      path: "/news/:id",
      element: <SingleNew/>
    },
    {
      path:"/culturalFigures",
      element: <CulturalFigures/>
    },
    {
      path: "culturalFigures/:id",
      element: <FigureSingle/>
    }
])