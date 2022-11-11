import { router } from "./routes"
import { RouterProvider } from 'react-router';
import React, { useEffect } from "react";

export const App = ()=>{
    useEffect(()=>{
        window.scrollTo(0,0, "smooth")
    },[])
    return <React.Fragment>
            
            <RouterProvider router={router}/>
        
    </React.Fragment>
}