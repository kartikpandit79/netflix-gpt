import React, { useRef, useState } from 'react';
import Header from './Header';
import { validateData } from '../Utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUsers } from '../Utils/userSlice';
import { WALL_IMG, AVATAR } from "../Utils/constant";



const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        // // console.log("clicked");
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonValidate = (e) => {
        e.preventDefault();
        let enteredEmail = email.current.value;
        let enteredPassword = password.current.value;
        let enteredName = name?.current?.value
        let err = validateData(enteredEmail, enteredPassword, !isSignInForm, enteredName)
        setErrorMsg(err);
        if (err) return;
        if (!isSignInForm) {
            // Sign Up
            createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
                .then(userCred => {
                    // console.log("user cred sign up", userCred);
                    const userDetails = userCred.user
                    updateProfile(userDetails, {
                        displayName: enteredName,
                        photoURL:  AVATAR 
                    }).then(() => {
                        // console.log("auth.currentUser", auth);
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUsers({ uid, email, displayName, photoURL }));
                    }).catch((error) => {
                        // // console.log("update profile error", error);
                        setErrorMsg(error)
                    });
                }).catch(error => {
                    // // console.log(error, "error");
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage)
                })
        }
        else {
            // Sign In
            signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
                .then((userCredential) => {
                    // Signed in 
                    // const user = userCredential.user;
                    // // console.log("sign in", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage)
                });
        }

    }


    return (
        <div  >
            <Header />
            <div className='absolute '>
                <img src={WALL_IMG}
                    alt='logo' className='h-full'
                />
            </div>

            <form className='absolute w-4/12 p-12 bg-black my-12 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {errorMsg && <p className='text-orange-600 font-bold text-lg py-2'>{errorMsg}</p>}
                {!isSignInForm && <input type='text' placeholder='Name'
                    className='p-4 my-2 w-full bg-slate-800 rounded-lg' ref={name}
                />}
                <input type='email' placeholder='Email Address' ref={email}
                    className='p-4 my-2 w-full bg-slate-800 rounded-lg' />
                <input type='password' placeholder='Password' ref={password}
                    className='p-4 my-2 w-full  bg-slate-800 rounded-lg' />
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'
                    onClick={handleButtonValidate}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={(e) => toggleSignInForm(e)}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In"}
                </p>
            </form>
        </div>
    )
}

export default Login