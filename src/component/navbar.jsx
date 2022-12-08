import Logo from './../assets/starbucks-coffee-logo-0639383401-seeklogo.com.png'

import './navbar.css'

import { MdLocationOn, MdOutlineAccountCircle } from 'react-icons/md'

import { Link, useLocation } from 'react-router-dom'

export default function Navbar(props) {
    const location = useLocation() // Digunakan untuk mendapatkan pathname
    return (
        <div>
            <div className='navbar  flex px-10   justify-between fixed w-screen'>
                <div className='flex items-center'>
                    <Link to='/'>
                    <img src={Logo} width='50px' height='50px' />
                    </Link>

                    <div className='flex justify-around'>
                        
                        <div className='pl-10 font-bold'>
                            <Link to="/menu">
                                Order
                            </Link>
                        </div>
                        <div className='pl-10 font-bold'>
                            <Link to='/iseng'>
                                Cards
                            </Link>

                        </div>
                        <div className='pl-10 font-bold'>
                            Gift
                        </div>
                    </div>

                </div>
                <div className='flex items-center'>
                    {
                        location.pathname === '/signup' || location.pathname === '/login' ?
                            null
                            :
                            <>
                                <div className='flex items-center'>
                                    <MdLocationOn />
                                    <span className='mr-10 font-bold'>
                                        Find a store
                                    </span>
                                </div>
                                {
                                    props.data.username ?
                                        <div className='flex items-center'>
                                            <div className='font-bold'>
                                                {props.data.username}
                                            </div>
                                            <div className='my-fs-20 mt-1 ml-1'>
                                                <MdOutlineAccountCircle onClick={props.myFunc.onLogout} />
                                            </div>
                                        </div>
                                        :
                                        <>
                                                <button className=' my-dark rounded-full mr-3 w-50 h-10 px-3 py-2'style={{ border: '1px solid black' }}>
                                                    <Link to='/login'>
                                                        Sign in
                                                    </Link>
                                                </button>
                                                <button className='my-light my-bg-dark rounded-full px-3 py-2 w-50 h-10' style={{ border: '1px solid black' }}>
                                                    <Link to='/signup'>
                                                        Join now
                                                    </Link>
                                                </button>
                                        </>
                                }
                            </>
                    }
                </div>
            </div>
        </div>
    )
}