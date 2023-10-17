import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import Login from './Login'
import Browse from './Browse'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ]);

    // console.log("BOdy");
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body