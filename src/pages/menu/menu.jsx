import Pic3 from '../../assets/rewards-carousel-3_tcm121-77066.webp';

import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {

    const [data, setData] = useState([])
    const [backupData, setBackupData] = useState([])
    const [category, setCategory] = useState([])
    const [categorySelected, setCategorySelected] = useState(0)


    useEffect(() => {
        onGetData()
    }, [])

    // ---> on get data & filtering on user
    // let onGetData = async () => {
    //     try {
    //         let response = await axios.get('http://localhost:5000/products') //ambil data product dari db
    //         let responseCategory = await axios.get('http://localhost:5000/category') // ambil data category dari db
    //         let newResponseFilter = response.data.filter(value => { //data product di filter
    //             return value.category ===0 
    //         })

    //         setData(newResponseFilter) // state data diisi data product yg telah di filter 
    //         setBackupData(response.data) // state backupdata diisi oleh data product dari db
    //         setCategory(responseCategory.data) // state category diisi oleh category yang ada di db
    //     } catch (error) {

    //     }
    // }

    let onGetData = async () => {
try {
    let response = await axios.get('https://my-json-server.typicode.com/ashfimzk/jsonserver-jcwd2302/products?category=0')
    let responseCategory = await axios.get('https://my-json-server.typicode.com/ashfimzk/jsonserver-jcwd2302/category')

    setData(response.data)
    setCategory(responseCategory.data)
} catch (error) {
    
}
    }
        // filter using user side
    // let onFilter = (idx) => {  // function akan menerima argument index
    //     let newDataFiltered = backupData.filter((value) => { // state backup data yang berasal dari db akan di filter dan disimpan dalam sebuah variabel baru
    //         return value.category === idx //kemudia data yang direturn hanya data yang memiliki value dalam key category yang sama dengan index

    //     })

    //     setData(newDataFiltered) // setelah itu state dat akan diupdate oleh data yang telah difilter
    //     setCategorySelected(idx) // kemudian state categoryselected akan diupdate oleh index nya
    // }

    let onFilter = async(idx) =>{
        let response = await axios.get(`https://my-json-server.typicode.com/ashfimzk/jsonserver-jcwd2302/products?category=${idx}`)

        setData(response.data)
        setCategorySelected(idx)
    }

    return (
        <div className="flex px-20 pt-32">
            <div className="basis-1/6">
                <div>
                    <h1 className="text-center my-fs-25 font-bold">
                    {category[categorySelected]}
                    </h1>
                </div>
                <div className='flex flex-col justify-end'>
                {
                    category.map((value, index) => { // state category akan dimapping sehingga menghasilkan tampilan di dalam interface 
                        return (
                            <button key={index} onClick={() => onFilter(index)}>{value}</button> // menghasilkan sebuah div yang dapat dipencet user akan mentrigger function onfilter
                        ) // ketika memencet contohnya drink(ada di index ke 0) ---> maka onfilter akan tertrigger dan menerima sebuah argument index
                    }) //baca function on fitler
                }
                </div>
            </div>
            <div className="ml-10 basis-5/6">
                <div>
                    <h1 className="my-fs-30 font-bold">
                        Menu
                    </h1>
                </div>
                <div className="mt-10 border-bottom pb-3">
                    <h1 className="my-fs-25 font-bold">
                        {category[categorySelected]}
                    </h1>
                </div>
                {/* Lists Products */}
                <div className="grid grid-cols-2 mt-3">
                    {
                        data.map((value, index) => {
                            return (
                                <div key={index} className='flex items-center mt-3'>
                                    <div>
                                        <Link to={`/product/${value.id}`}>
                                        <img src={value.image} style={{ width: '100px', height: '100px' }} className='rounded-full' />
                                        </Link>
                                    </div>
                                    <div className='pl-3'>
                                        <h1 className='my-fs-20 font-bold'>
                                            {value.name}
                                        </h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}