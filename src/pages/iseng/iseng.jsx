import { useState } from "react";
import{ Link } from "react-router-dom"

let Iseng = () => {
    const [data, setData] = useState(0)

    let count = (operator) => {

        if (operator === '+') {

            if(data<5){
            let changenum = data
            changenum++
            setData(changenum)
            }

        } else {

            if (data > 0) {
                let changenum = data
                changenum--
                setData(changenum)
                
            }

    }
}

    return (
        <>
            <button onClick={() => count("+")}>
                +
            </button>
            <div>
                {data}
            </div>
            <button onClick={() => count("-")}>
                -
            </button>
            <button>
                <Link></Link>
            </button>
        </>
    )
}


export default Iseng