// import { render } from "@testing-library/react";
// import React from "react";
import { Link } from "react-router-dom";
import "./home.css"
import { useEffect, useState, useRef } from "react";
import Pic1 from "../../assets/2.jpg";
import Pic2 from "../../assets/3.jpg";
import Pic3 from "../../assets/4.jpg";

// class Home extends React.Component {

//   state = {
//     number: 0
//   }
// // kalo pake 2 function
//   // changeNumberPlus = () => {
//   //   let newNumber = this.state.number
//   //   newNumber++
//   //   this.setState({ number: newNumber })
//   // }

//   // changeNumberMinus = () => {
//   //   let newNumber = this.state.number
//   //   newNumber--
//   //   this.setState({ number: newNumber })
//   // }

//   changeNumber = (operator) => {
//     if(operator==="+"){
//       this.setState({number :this.state.number+1})
//       alert("Barang berhasil dimasukan ke keranjang")
//     } else{
//       this.setState({number:this.state.number-1})
//       alert("Barang berhasil dihapus dari keranjang")
//     }
//   }

//   componentDidMount(){
//     // sering digunakan untuk melakukan fetch data
//     // dijalankan ketika proses render pertama kali jalan
//     console.log("CompDidMount Running!")
//   }

//   componentDidUpdate(){
//     // Dijalankan setiap kali terjadi perubahan state
//     console.log("CompDidUpdate Running")
//   }

//   componentWillUnmount(){
//     // dijalankan sebelum component dihapus
//     // sebelum berpindah page
//     alert("Yakin")
//   }


//   render() {
//     return (
//       <>
//         <h1>
//           This is App
//         </h1>
//         <button onClick={() => this.changeNumber("-")}>
//           -
//         </button>
//         <h1>
//           {
//             this.state.number
//           }
//         </h1>
//         <button onClick={() => this.changeNumber("+")}>
//           +
//         </button>

//         <Link to='/profile'>
//             menuju ke profile
//         </Link>

//       </>
//     )

//   }
// }

let Home = () => {

    return (
        <div className="flex" >
            <div className="basis-2/5 sectionright ">
                <div className=" h-screen bottom-0 flex justify-center items-center">
                    <div className=" fixed">
                        <h1 className="text-[28px] font-bold">Merry sipping ⛄️</h1>
                    </div>
                </div>
            </div>
            <div className=" pl-1 right basis-3/5 pt-32 ">
                <div className="section1 pl-10 mb-10">
                    <h1 className='font-bold'>STARBUCKS® REWARDS</h1>
                    <div className="pl-2 pt-4 font-semibold text-xl flex">
                        <div className='flex flex-col items-center w-6/12'>
                            <img src={Pic1} alt='Carousel-1' className='w-11/12 rounded-xl' />
                            <p className='pl-3 pt-4'>
                                Let us treat you—earn and redeem Stars for free drinks, food and more.
                            </p>
                        </div>
                        <div className='flex flex-col items-center w-6/12'>
                            <img src={Pic2} alt='Carousel-2' className='w-11/12 rounded-xl' />
                            <p className='pl-3 pt-4'>
                                Customize your order in the app and pick it up when it's ready.
                            </p>
                        </div>
                        <div className='flex flex-col items-center w-6/12'>
                            <img src={Pic3} alt='Carousel-3' className='w-11/12 rounded-xl' />
                            <p className='pl-3 pt-4'>
                                Stop in on your birthday for a special treat on the house.
                            </p>
                        </div>
                    </div>
                    <button className='my-bg-dark my-light rounded-full px-3 py-1 mt-4 ml-3 font-semibold'>
                        Join now
                    </button>
                    <button className='my-dark rounded-full px-3 py-1 ml-3' style={{ border: '1px solid black' }} >
                        Learn more
                    </button>
                </div>
                <div className="section2">
                    <div className=' bg-[#f9f9f9] w-full flex justify-center ' >
                        {/* Section2: Card1 */}
                        <div className="pt-10">
                            <div className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Answer a few questions to find something new</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">What type of drink are you looking for?</p>
                                <br />
                                <div className='flex justify-between flex-col my-bg-main p-3 rounded-md'>
                                    <div className='flex justify-between'>
                                        <div className="">
                                            <h1 className='my-fs-20 my-light'>
                                                Iced
                                            </h1>
                                            <p className='my-light'>
                                                Cool off and uplift
                                            </p>
                                        </div>
                                        <img src='https://app.starbucks.com/weblx/images/drink-finder/iced_drink.png' width='30px' height='30px' />
                                    </div>


                                </div>
                                <div className='flex justify-between flex-col my-bg-main p-3 rounded-md mt-10'>
                                    <div className='flex justify-between'>
                                        <div className="">
                                            <h1 className='my-fs-20 my-light'>
                                                Hot
                                            </h1>
                                            <p className='my-light'>
                                                Warm Up and Get Going
                                            </p>
                                        </div>
                                        <img src='https://app.starbucks.com/weblx/images/drink-finder/hot_drink.png' width='30px' height='30px' />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-10 bg-[#f9f9f9] flex justify-center ' >
                        {/* Section2: Card1 */}
                        <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#ffff] ">
                            <a href="#">
                                <img class="rounded-t-lg" src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/SFLOwnedArt_tcm121-82220.jpg' alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Play for your chance to win</h5>
                                </a>
                                <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400">Starbucks for Life is here. Join Starbucks® Rewards to play for gift cards, drinks and more.</p>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white my-bg-main rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                  Join Now
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='py-10 bg-[#f9f9f9] flex justify-center ' >
                        {/* Section2: Card1 */}
                        <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#ffff]">
                            <a href="#">
                                <img class="rounded-t-lg" src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/FY23DeltaHolidayUnauthAppIMAGE_tcm121-81975.jpg' alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Closer to moments that matter</h5>
                                </a>
                                <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400">Add extra cheer this holiday season by joining Starbucks® Rewards, linking it to Delta SkyMiles® to unlock 1 mile per $1 spent at Starbucks (excludes taxes & tips)</p>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white my-bg-main rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='fixed right-12 bottom-0 mb-10'>
                        <button className='X font-bold text-white bg-emerald-700 flex items-center px-5 py-4 rounded-full'>
                            <Link to='/menu'>
                                Start an order
                            </Link>
                        </button>
                    </div>
                </div>
                

            </div>
        </div>

    )

    // const [number, setNumber] = useState(0)
    // let changeNumber = (operator) => {
    //     if (operator === "+") {
    //         setNumber(number + 1)
    //         alert("Barang berhasil dimasukan ke keranjang")
    //     } else {
    //         setNumber(number - 1)
    //         alert("Barang berhasil dihapus dari keranjang")
    //     }

    // }

    // // ===ComponentDidMount
    // useEffect(() => {
    //     console.log("Use Effect Running")
    // }, [])
    // // ===ComponentDidUpdate
    // useEffect(() => {
    //     console.log("UseEffect Update Running")
    // }, [number])
    // // ===ComponentWillUnmount
    // useEffect(() => {
    //     return () => {
    //         console.log("UseEffect WilUnmount Running")
    //     }
    // }, [])

    //     const inputUsername = useRef()
    //     const inputPassword = useRef()
    //     let onSubmit = () => {
    //         console.log(inputUsername.current.value)
    //         console.log(inputPassword.current.value)
    //     }

    // return (
    //     <>
    //         {console.log("Render1x")}
    //         <h1>Ini Home Page</h1>
    //         <h1>{number}</h1>
    //         <button onClick={() => changeNumber("+")}>
    //             +
    //         </button>
    //         <button onClick={() => changeNumber("-")}>
    //             -
    //         </button>


    //         <Link to='/profile'>
    //             menuju ke profile
    //         </Link>
    //         <input type="text" placeholder="Input Your Username" ref={inputUsername} />
    //         <input type="password" placeholder="Input Your password" ref={inputPassword} />

    //         <button onClick={onSubmit}>Submit</button>

    // </>
    // )
}


export default Home;