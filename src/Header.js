import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from './Utils/firebase'
import {useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './Utils/userSlice'
import { toggleGptSearchView } from './Utils/GptSlice';


function Header(prop) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function HandleSignOut() {
    signOut(auth).then(() => {
      navigate('/');
    }).catch(() => {
      navigate('/Error')
    })
  }

  //we have to call this API only once when user action like sign in,out,up
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, function (user) {
        if (user) {
            //sign in or up
            const { uid, email, displayname } = user;
            dispatch(addUser({uid:uid, email:email,displayname:displayname}));
          navigate('/browse');
        }
        else {
            //user is sign out
            dispatch(removeUser());
            navigate('/');
        }

    })

    return function unmt() {
      unsubscribe();
    }

  }, [])
  
  function HandleGptSearch() {
    dispatch(toggleGptSearchView());
  }

  return (
    <div className="flex flex-row justify-items-start space-x-12 absolute px-4 py-1 bg-gradient-to-b from-black w-full h-42 z-20">
      
      <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456" alt='Netflix' className='w-44' />

      <div  className='flex p-6 m-1 flex-wrap justify-normal'>
      <button hidden={prop.signIn} className='text-white font-bold m-1'>Home</button>
        <button hidden={prop.signIn} className='text-white font-extralight m-1 p-1'>Tv Show</button>
        <button hidden={prop.signIn} className='text-white font-extralight m-1 p-1'>Movies</button>
        <button hidden={prop.signIn} className='text-white font-extralight  m-1 p-1'>New & Popular</button>
        <button hidden={prop.signIn} onClick={HandleGptSearch} className='text-white font-extralight  bg-purple-500 m-2 p-2 rounded-2xl'>GPT Search</button>
        <div className='mx-[200px]'></div>
      </div>
      <div className='bg-gradient-to-b from-black mt-6 p-1 mx-24'>
        <img  hidden={prop.signIn } className="h-6 w-6" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="logo" />
        <button hidden={prop.signIn} onClick={HandleSignOut} className='bg-red-600 rounded-3xl p-1 text-white font-bold'>Sign out</button>
  
      </div>

    </div>
  )
}

  export default Header;
