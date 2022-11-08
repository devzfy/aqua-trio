import { router } from "./routes"
import { RouterProvider } from 'react-router';
import React from "react";
import Header from "./container/header/header";
import Footer from "./container/footer/footer";

export const App = ()=>{
    return <React.Fragment>
        
            <RouterProvider router={router}/>
        
    </React.Fragment>
}