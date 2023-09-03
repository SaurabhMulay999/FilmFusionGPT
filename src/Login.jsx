import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from './Utils/validate.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Utils/firebase.js';

function Login() {
    const [isSignInForm, setIsSignInForm] = useState({ signIn: true, text: 'In' });
    const [errMessage, seterrMessage] = useState("");
    const email = useRef(null);
    const pass = useRef(null);
    function toggleSignInForm() {
        email.current.value = null;
        pass.current.value = null;

        if (isSignInForm.signIn === true) {
            setIsSignInForm({signIn:false,text:'Up'});
        }
        else {
            setIsSignInForm({ signIn: true, text: 'In' });
        }
    }
    function HandleSubmit(e) {
        e.preventDefault();
  
    }

    function handleButtonClick() {
        //validation or validate the form data'
        let msg = null;
        if (!isSignInForm.signIn) {
            msg = checkValidData(email.current.value, pass.current.value);
            seterrMessage(msg);
        }
        if (msg == null) {
            //create a new user , sign in or sign up;
            if (isSignInForm.signIn) {
                //sign in 
                signInWithEmailAndPassword(auth, email.current.value, pass.current.value).then(
                    function exec(usercred) {
                        const user = usercred.user;

                    }
                ).catch(function errCb(error) {
                    seterrMessage(error.message+' '+ error.code);
                })

            }
            else {
                //signup
                createUserWithEmailAndPassword(auth, email.current.value, pass.current.value).then(
                    function exec(userCred) {
                        const user = userCred.user;
                        console.log(user);
                    }
                ).catch((error) => {
                    const errcode = error.code;
                    //set the error message show it on UI
                    seterrMessage(error.message+' '+errcode);
                });



            }
        }
        

    }
    return (
        <>
            <div className="absolute">
                <Header />
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="netflix" className="w-full h-full" />
               

            </div>
            <form onSubmit={HandleSubmit} className="absolute p-12 bg-opacity-90 bg-black w-3/12 text-white  my-36 mx-auto right-0 left-0">
                <h1 className="font-bold text-2xl p-2 text-white">Sign { isSignInForm.text}</h1>
                <input type="text" placeholder="UserName" hidden={isSignInForm.signIn}  className="p-3 text-white rounded-lg bg-gray-700 my-3 w-full"/>
                <input ref={email} type="text" placeholder="Email Address" className="p-3 text-white rounded-lg bg-gray-700 my-3 w-full" />
                <input ref={pass} type="password" placeholder="Password" className="p-3 my-3 w-full rounded-lg bg-gray-700" />
                <p className="text-red-500 font-mono">{errMessage}</p>
                <button onClick={handleButtonClick} className="p-2 my-6 w-full bg-red-700">Sign {isSignInForm.text}</button>
                <p hidden={!isSignInForm.signIn} className="py-4 text-bold" onClick={toggleSignInForm}>New to Netflix, Sign up Now.</p>
                <p hidden={isSignInForm.signIn} onClick={toggleSignInForm} className="py-4 text-bold">Already have Account, Sign In</p>
            
            </form>
        </>


    )
}

export default Login;