import "./signup.css";

import { useRef, useState } from 'react';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";

function SignUp(props) {
    const [disabledButton, setDisabledButton] = useState(false) //false button bisa dipencet
    const [message, setMessage] = useState("")
    const username = useRef()
    const email = useRef()
    const password = useRef()



    let onSubmit = async () => {
        // const inputUsername = username.current.value
        // const inputEmail = email.current.value
        // const inputPassword = password.current.value


        try {
            // 1.Step 1 get input value
            const inputUsername = username.current.value
            const inputEmail = email.current.value
            const inputPassword = password.current.value

            if (inputUsername.length === 0 || inputEmail.length === 0 || inputUsername.length === 0) throw { message: "Inputan belum lengkap" }

            if (inputPassword.length < 8) throw { message: "Password Not Long Enough" }

            if (!inputEmail.includes("@")) throw { message: "Email Not Valid" }

            let character = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
            if (!character.test(inputPassword)) throw { message: "Password Must Contain Number" }


            setDisabledButton(true)
            let checkEmail = await axios.get(`https://my-json-server.typicode.com/ashfimzk/jsonserver-jcwd2302/users?email=${inputEmail}`)
            let checkUsername = await axios.get(`https://my-json-server.typicode.com/ashfimzk/jsonserver-jcwd2302/users?username=${inputUsername}`)
            if (checkEmail.data.length === 0 && checkUsername.data.length === 0) {
                // post
                let register = await axios.post('https://my-json-server.typicode.com/ashfimzk/jsonserver-jcwd2302/users', { username: inputUsername, email: inputEmail, password: inputPassword })
                username.current.value=""
                email.current.value=""
                password.current.value=""
                toast("Your account register, please sign in")
                setMessage('')

            } else {
                throw { message: "Email/Username already register" }
            }

            setMessage("")

        } catch (error) {
            setMessage(error.message)

        } finally {
            setDisabledButton(false)
            // username.current.value=""
            // email.current.value=""
            // password.current.value=""
            // setMessage("")

        }
        // try {
        //     setDisabledButton(true)
        //     let checkEmail = await axios.get(`http://localhost:5000/users?email=${inputEmail}`)
        //     let checkUsername = await axios.get(`http://localhost:5000/users?username=${inputUsername}`)

        //     if (checkEmail.data.length === 0 && checkUsername.data.length === 0) {
        //         // post
        //         if (inputUsername.length != 0 && inputPassword.length != 0) {
        //             if (inputEmail.includes("@") && !regex.test(inputPassword)  && inputPassword.length > 6) {
        //                 let register = await axios.post('http://localhost:5000/users', { username: inputUsername, email: inputEmail, password: inputPassword })
        //                 alert("Register Success,Please Sign In")
        //             } else {
        //                 alert("Wrong Email")
        //             }
        //         } else {

        //         }
        //     } else {
        //         throw { message: 'EMAIL/USERNAME ALREADY REGISTER' }

        //     }

        // } catch (error) {
        //     alert(error.message)
        // } finally {
        //     setDisabledButton(false)
        // }

    }
    if(props.isRedirect.redirect){
        return <Navigate to='/'/>
    }
    return (
        <div className="flex flex-col items-center py-20">
            <h1 className="my-fs-25 font-bold">
                Create an account
            </h1>
            <h1 className="my-fs-15 my-grey mt-5 font-bold">
                STARBUCKS® REWARDS
            </h1>
            <p className="my-grey mt-3" style={{ maxWidth: '600px', textAlign: 'center' }}>
                Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and moremore.
            </p>
            <div className="cards mt-20 px-20 py-10 w-3/6 rounded-md flex flex-col">
                <p className='font-bold'>
                    * indicates required fiels
                </p>
                <h1 className='my-fs-20 mt-5 mb-3 font-bold'>
                    Personal Information
                </h1>
                <input ref={username} type="text" placeholder='*input your username' className='py-2 px-2 w-100 rounded-md' style={{ border: '1px solid  lightgray' }} />

                <h1 className='my-fs-20 mt-5 mb-3 font-bold'>
                    Account Security
                </h1>
                <input ref={email} type="text" placeholder='*input your email' className='py-2 px-2 w-100 rounded-md' style={{ border: '1px solid lightgray ' }} />

                <input ref={password} type="password" placeholder='*input your password' className='py-2 px-2 w-100 rounded-md mt-3' style={{ border: '1px solid  lightgray' }} />
                <br /> <p className="text-red-500">{message}</p>
                <button disabled={disabledButton} onClick={() => onSubmit()} className='my-bg-main my-light px-3 py-3 mt-3 rounded-full self-end'>
                    {disabledButton ? 'loading' : 'register now'}
                </button>
            </div>
            <Toaster/>
        </div>
    )
}

export default SignUp;