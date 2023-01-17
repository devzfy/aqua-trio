import { router } from "./routes"
import { RouterProvider } from 'react-router';
import React from "react";
export const App = ()=>{
    return <RouterProvider router={router}/>
    
}