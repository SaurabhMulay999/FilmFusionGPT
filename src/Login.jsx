import { useState } from "react";
import Header from "./Header";

function Login() {
    const [isSignInForm, setIsSignInForm] = useState({ signIn: true, text: 'In' });
    function toggleSignInForm() {
        if (isSignInForm.signIn === true) {
            setIsSignInForm({signIn:false,text:'Up'});
        }
        else {
            setIsSignInForm({ signIn: true, text: 'In' });
        }
    }
    return (
        <>
            <div className="absolute">
                <Header />
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="netflix" className="w-full h-full" />
               

            </div>
            <form className="absolute p-12 bg-opacity-90 bg-black w-3/12 text-white  my-36 mx-auto right-0 left-0">
                <h1 className="font-bold text-2xl p-2 text-white">Sign { isSignInForm.text}</h1>
                <input type="text" placeholder="UserName" hidden={isSignInForm.signIn}  className="p-3 text-white rounded-lg bg-gray-700 my-3 w-full"/>
                <input type="text" placeholder="Email Address" className="p-3 text-white rounded-lg bg-gray-700 my-3 w-full" />
                <input type="text" placeholder="Password" className="p-3 my-3 w-full rounded-lg bg-gray-700" />
                <button className="p-2 my-6 w-full bg-red-700">Sign {isSignInForm.text}</button>
                <p hidden={!isSignInForm.signIn} className="py-4 text-bold" onClick={toggleSignInForm}>New to Netflix, Sign up Now.</p>
                <p hidden={isSignInForm.signIn} onClick={toggleSignInForm} className="py-4 text-bold">Already have Account, Sign In</p>
            </form>
        </>


    )
}

export default Login;