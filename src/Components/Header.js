import React, { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUsers, removeUsers } from "../Utils/userSlice";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { SUPPORTED_LANG, logo } from "../Utils/constant"
import { toogleGptSearchView } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/configSlice';
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const gptShow = useSelector(store => store.gpt.showGptSearch)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUsers({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUsers());
                navigate("/");
            }
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

            navigate("/error")
        });
    }

    const handleGPTSearchToggle = () => {
        dispatch(toogleGptSearchView())
    }

    const handleChangeLanguage = (e) => {
        dispatch(changeLanguage(e.target.value))
    }


    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
            <img className='w-44 mx-auto md:mx-0'
                src={logo}
                alt='logo'
            />
            {user && <div className='flex p-2'>
                {gptShow && <select className='p-2 m-2 bg-gray-900 text-white'
                    onChange={(e) => handleChangeLanguage(e)} >
                    {SUPPORTED_LANG.map(val => (
                        <option key={val.name} value={val.identifier}>{val.name}</option>
                    ))}

                </select>}
                <button onClick={handleGPTSearchToggle}
                    className='py-2 px-4 mx-4 my-2 text-white bg-purple-800 rounded-lg' >
                    {gptShow ? "Home " : "GPT Search"}
                </button>
                <img className='w-14 h-14 rounded-xl hidden md:inline'
                    alt='usericon'
                    src={user?.photoURL}
                />
                <button className='font-bold text-white mx-2' onClick={handleSignOut}>Sign Out</button>
            </div>}

        </div>
    )
}

export default Header