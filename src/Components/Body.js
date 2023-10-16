import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUsers, removeUsers } from "../Utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
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

    useEffect(() => {
        // console.log("useEffect1===>>");
    })


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("onAuthStateChange SignIN/UP", user)
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUsers({uid, email, displayName, photoURL}));
            } else {
                // console.log("onAuthStateChange SignOUT")
                dispatch(removeUsers());
            }
        });
    }, [])
    // console.log("BOdy");
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body