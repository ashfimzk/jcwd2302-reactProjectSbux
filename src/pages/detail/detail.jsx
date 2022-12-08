import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {BsCart4} from 'react-icons/bs';

export default function DetailProduct() {

    const productId = useParams()
    const selectSize = useRef()
    const selectSugar = useRef()
    const selectTopping = useRef()
    const selectId = productId.data
    const [data, setData] = useState(null)
    const [sizeToShow, setSizeToShow] = useState(0)

    let onSelectionSize = () => {
        let indexSelectedSize = selectSize.current.value
        setSizeToShow(indexSelectedSize)
    }

    let onGetData = async () => {
        try {
            let response = await axios.get(`https://my-json-server.typicode.com/ashfimzk/jsonserver-jcwd2302/products/${productId.id}`)
            console.log(response)
            setData(response.data)
        } catch (error) {

        }
    }

    let AddToCart = async () =>{
        try {

            let myToken =  localStorage.getItem('token')
          console.log(myToken)
            if(myToken!==null){
                myToken =  parseInt(localStorage.getItem('token'))
            } else{
                myToken = localStorage.getItem('tokenUid')
            }
            console.log(myToken)

            let dataToSend = {
                idProduct : data.id,
                indexSize : parseInt(selectSize.current.value),
                indexTopping : parseInt(selectSize.current.value),
                indexSugar : null,
                quantity: 1,
                userId : myToken
            }

            if(data.category===0){
                
                 dataToSend = {
                    idProduct : data.id,
                    indexSize : parseInt(selectSize.current.value),
                    indexTopping : parseInt(selectSize.current.value),
                    indexSugar : parseInt(selectSugar.current.value),
                    quantity: 1,
                    userId : myToken
                }
            }
          
            
                //  let register = await axios.post('http://localhost:5000/cart') //{ idProduct: inputID, indexSize: inputSize,indexSugar:inputselectsugar, indexTopping: inputselecttopping, quantity:1, userID:inputUserId })
                let checkExist = await axios.get(`https://my-json-server.typicode.com/ashfimzk/jsonserver-jcwd2302/cart?idProduct=${data.id}`)

                if(checkExist.data.length === 0){
                    let response = await axios.post(`https://my-json-server.typicode.com/ashfimzk/jsonserver-jcwd2302/cart`,dataToSend)
                } else{
                    let newQuantity = checkExist.data[0].quantity + 1
                    let update = await axios.patch(`https://my-json-server.typicode.com/ashfimzk/jsonserver-jcwd2302/cart/${checkExist.data[0].id}`,{quantity:newQuantity})
                    console.log(update)
                }

            } catch (error) {
            
        }
    }

    useEffect(() => {
        onGetData()
    }, [])

    if (data === null) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className="pt-32">
            <div>

            </div>
            <div className="flex items-center bg-[#1f3933]" style={{ height: '300px' }}>
                <div className='basis-2/5 flex justify-center'>
                    <img src={data.image} className='rounded-full' style={{ width: '200px', height: '200px' }} />
                </div>
                <div className="basis-3/5 my-light">
                    <h1 className="my-fs-30 font-bold">
                        {data.name}
                    </h1>
                    <h1 className=" my-fs-25 mt-2">
                        {data.size[sizeToShow].calories} Calories
                    </h1>
                    <h1 className=" my-fs-25 mt-2">
                        Rp. {(data.size[sizeToShow].price).toLocaleString()}
                    </h1>
                </div>
            </div>
            <div className="flex mt-10">
                <div className="basis-1/3 px-24">
                    <h1 className="my-fs-25 font-bold pb-2" style={{ borderBottom: '3px solid silver' }}>
                        Size option
                    </h1>
                    <select ref={selectSize} onClick={onSelectionSize} id="countries" className="mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#1f3933] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        {data.size.map((value, index) => {
                            return (
                                <option value={index}>{value.option}</option>
                            )
                        })
                        }
                    </select>
                </div>
                <div className="basis-2/5">
                    <h1 className="my-fs-25 font-bold pb-2" style={{ borderBottom: '3px solid silver' }}>
                        Topping
                    </h1>
                    <select ref={selectTopping} id="countries" className="mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#1f3933] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                       
                        {data.topping.map((value, index) => {
                            return (
                                <option value={index}>{value}</option>
                            )
                        })}

                    </select>
                    {
                        data.sugar ?
                            <>
                                <h1 className="my-fs-25 font-bold pb-2" style={{ borderBottom: '3px solid silver' }}>
                                    sugar
                                </h1>
                                <select ref={selectSugar} id="countries" className="mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#1f3933] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        
                                    {
                                        data.sugar.map((value, index) => {
                                            return (
                                                <option value={index}>{value}</option>
                                            )
                                        })
                                    }

                                </select>
                            </>
                            :
                            null
                    }

                </div>
            </div>
            <div className="flex justify-center pt-10 pb-10">
            {
                localStorage.getItem('token') || localStorage.getItem('tokenUid')?  <button onClick={()=>AddToCart()} className='X font-bold text-white bg-emerald-700 flex items-center px-5 py-4 rounded-full'>

                Add to Cart
                 <BsCart4/>
             </button> :
             null
            }
                {/* <button onClick={()=>AddToCart()} className='X font-bold text-white bg-emerald-700 flex items-center px-5 py-4 rounded-full'>

                   Add to Cart
                    <BsCart4/>
                </button> */}
            </div>
        </div>
    )
}