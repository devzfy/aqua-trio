import {
    createBrowserRouter,
  } from "react-router-dom";

import {
    Home,
    News,
    SingleNew,
    CulturalFigures,
    FigureSingle,
    Edition,
    EditionSingle,
    VrTour,
    TourCategories,
    TourSingle,
    Course,
    CourseCategories,
    CourseSingle,
    Rate
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
    },
    {
      path: "edition",
      element: <Edition/>
    },
    {
      path: "/edition/:id",
      element: <EditionSingle/>
    },
    {
      path: "/tour",
      element: <VrTour/>
    },
    {
      path: "/tour/museum",
      element: <TourCategories/>
    },
    {
      path: "/tour/park",
      element: <TourCategories/>
    },
    {
      path: "/tour/:id",
      element: <TourSingle/>
    },
    {
      path: "/courses",
      element: <Course/>
    },
    {
      path: "/courses/music",
      element: <CourseCategories/>
    },
    {
      path: "/courses/theatre",
      element: <CourseCategories/>
    },
    {
      path: "/courses/movie",
      element: <CourseCategories/>
    },
    {
      path: "/courses/oratory",
      element: <CourseCategories/>
    },
    {
      path: "/courses/:id",
      element: <CourseSingle/>
    },
    {
      path: "/rate",
      element: <Rate/>
    },
])