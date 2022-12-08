import { useState } from "react";


function Jualan() {
    const [data, setData] = useState([
        { product: "kaos", quantity: 5 },
        { product: "sepatu", quantity: 3 },
        { product: "celana", quantity: 100 }

    ])

    // const [idxselected,setIdxSelected] = useState(0)




    return (
        <>

            <table>
                <thead>
                    <tr>
                        <td>Nomor</td>
                        <td>Nama</td>
                        <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((value,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{value.product}</td>
                                <td>{value.quantity}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>




        </>
    )

}

export default Jualan