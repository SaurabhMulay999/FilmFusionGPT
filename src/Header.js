import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from './Utils/firebase'
import { useNavigate } from 'react-router-dom'

function Header(prop) {
  const navigate = useNavigate();

  function HandleSignOut() {
    signOut(auth).then(() => {
      navigate('/');
    }).catch(() => {
      navigate('/Error')
    })
  }

  return (
    <div className="flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black w-full h-46 z-10">
          <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456" alt='Netflix' className='w-44' />
      <div className='flex mt-6 p-2'>
        <img  hidden={prop.signIn } className="h-9 w-9 " src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="logo" />
        <button  hidden={prop.signIn} onClick={HandleSignOut} className='p-1 m-1 text-white font-bold'>Sign out</button>
      </div>

    </div>
  )
}

  export default Header;
