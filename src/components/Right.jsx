import React from 'react'

const Right = () => {
    return (
        <div className='right'>
            <div className='right_1'><p>Results</p></div>
            <div className='right_2'>
                <p>Results</p>
                <p>Score: 74%</p>
            </div>
            <div className="right_3">
                <div className="pie_chart">

                </div>
                <p>
                    Correct Answer <span style={{color:"#235784"}}></span><br/>
                    Not Answered <span style={{color:"#bcdbdf"}}></span><br/>
                    Wrong <span style={{color:"#40a8c4"}}></span>
                </p>
            </div>
        </div>
    )
}

export default Right