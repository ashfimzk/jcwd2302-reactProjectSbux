import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from './pages/profile/profile';
import Jualan from "./pages/test/jualan";
import Chakra from "./pages/chakra/chakra";
import Register from "./pages/register/register";
import Navbar from "./component/navbar";
import SignUp from "./pages/signup/signup";
import "./supports/stylesheets/utilities.css";
import Iseng from "./pages/iseng/iseng";
import Login from "./pages/login/login";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import Menu from "./pages/menu/menu";
import DetailProduct from "./pages/detail/detail";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Cart from "./pages/cart/cart";


function App() {

  const [username, setUsername] = useState("")
  const [redirect, setRedirect] = useState(false)

  const provider = new GoogleAuthProvider();


  useEffect(() => {
    checkIsLogin()
    checkTokenUid()
  }, [])


  let onLoginWithGoogle = async () => {
    try {
      let response = await signInWithPopup(auth, provider)

      localStorage.setItem('tokenUid', `${response.user.uid}`)
      setRedirect(true)
      setUsername(response.user.displayName)
    } catch (error) {
      console.log(error.message)
    }
  }

  let checkIsLogin = async () => {
    try {
      let getTokenId = localStorage.getItem('token')
      if (getTokenId) {
        let response = await axios.get(`https://my-json-server.typicode.com/ashfimzk/jsonserver-jcwd2302/users?id=${getTokenId}`)
        setUsername(response.data[0].username)
        setRedirect(true)
      }


    } catch (error) {

    }

  }



  let onLogin = async (inputUsername, inputPassword) => {
    try {

      // check is username & password exist?
      let response = await axios.get(`https://my-json-server.typicode.com/ashfimzk/jsonserver-jcwd2302/users?username=${inputUsername}&password=${inputPassword}`)
      if (response.data.length === 0) throw { message: "Account Not Registered" }

      localStorage.setItem('token', `${response.data[0].id}`)
      setUsername(response.data[0].username)
      toast("Login Success")
      setTimeout(() => {
        setRedirect(true)
      }, 3000)

    } catch (error) {
      toast(error.message)

    }
  }

  let onLogout = () => {
    signOut(auth)
    localStorage.removeItem('token')
    localStorage.removeItem('tokenUid')

    setRedirect(false)
    setUsername("")
  }

  let checkTokenUid = () => {
    if (localStorage.getItem('tokenUid')) {
      onAuthStateChanged(auth, (userFromFirebase) => {
        if (userFromFirebase) {
          setUsername(userFromFirebase.displayName)
        }
      })
    } else {
      onLogoutFirebase()
    }
  }

  let onLogoutFirebase = async () => {
   try {
    await signOut(auth)
    setRedirect(false)
    setUsername("")
   } catch (error) {
    
   }
  }

  return (
    <>
      <Navbar data={{ username }} myFunc={{ onLogout }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jualan" element={<Jualan />} />
        <Route path="/chakra" element={<Chakra />} />

        <Route path="/signup" element={<SignUp isRedirect={{ redirect }} />} />
        <Route path="/iseng" element={<Iseng />} />
        <Route path="/login" element={<Login loginGoogle={{ onLoginWithGoogle }} myFunc={{ onLogin }} isRedirect={{ redirect }} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>

      <Toaster />
    </>
  )
}


export default App;
