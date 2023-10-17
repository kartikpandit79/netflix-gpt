import React, { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUsers, removeUsers } from "../Utils/userSlice";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logo } from "../Utils/constant"
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("onAuthStateChange SignIN/UP", user);
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUsers({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                // console.log("onAuthStateChange SignOUT")
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
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
            // console.log("error", error);
            navigate("/error")
        });
    }

    // const handleHomePage = () => {
    //     navigate("/")
    // }
    // const handleBrowsePage = () => {
    //     navigate("/browse")
    // }


    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            {/* <button className='text-white bold' onClick={handleHomePage}>left</button>
            <button className='text-white bold' onClick={handleBrowsePage}>Right</button> */}
            <img className='w-44'
                src={logo}
                alt='logo'
            />
            {user && <div className='flex p-2 mx-2'>
                <img className='w-14 h-14 rounded-xl'
                    alt='usericon'
                    src={user?.photoURL}
                // src='https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'
                />
                <button className='font-bold text-white mx-2' onClick={handleSignOut}>Sign Out</button>
            </div>}

        </div>
    )
}

export default Header