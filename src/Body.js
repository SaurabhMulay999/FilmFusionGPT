import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './Utils/userSlice';
function Body() {
   // const dispatch = useDispatch();
   // const navigate = useNavigate();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }

    ]);
    return (
      
    <div>
        <RouterProvider router={appRouter}/>    
    </div>
  )
}

export default Body;