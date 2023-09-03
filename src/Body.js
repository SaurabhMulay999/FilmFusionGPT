import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './Utils/userSlice';
function Body() {
    const dispatch = useDispatch();
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

 
    //we have to call this API only once when user action like sign in,out,up
    useEffect(() => {
        onAuthStateChanged(auth, function (user) {
            if (user) {
                //sign in or up
                const { uid, email, displayname } = user;
                dispatch(addUser({uid:uid, email:email,displayname:displayname}));
                //when user sign in or sign up navigate to browse page
               // navigate('/browse'); //u cant navigate from here navigate from child comp of routerprovider in login do it

            }
            else {
                //user is sign out
                dispatch(removeUser());
                //navigate('/');
            }

        })

    },[])

    return (
      
    <div>
        <RouterProvider router={appRouter}/>    
    </div>
  )
}

export default Body;