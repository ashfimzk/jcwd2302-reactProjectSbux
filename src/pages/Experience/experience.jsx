import { useState } from "react";

function Experience() {
    const [data, setData] = useState([
        { year: '2020-2022', company: 'Purwadhika' },
        { year: '2019-2020', company: 'Mju' }

    ])
    const [idxselected, setIdxSelected] = useState(0)

    let onChange = (idx) => {
        setIdxSelected(idx)
    }

    return (
        <>
            <h1>Hai</h1>
            {/* <div className="worked">
                <div className="title">
                    <h1>
                        02. Where Ive Worked
                    </h1>
                    <div className="line">

                    </div>
                </div>
                <div className="sidebar">
                    <div >
                        Menu-1
                    </div>
                    <div onClick={() => getData(1)}>
                        Menu-2
                    </div>
                    <div>
                        Menu-3
                    </div>
                    <div>
                        Menu-4
                    </div>
                    <div>
                        Menu-5
                    </div>
                </div>
                <div className="description">
                    {
                        <div>
                            <p className="title">
                                {data[idx].company}
                            </p>
                            <p className="desc">
                                {data[idx].year}
                            </p>
                        </div>
                    }
                </div>
            </div> */}

        </>
    )
}

export default Experience