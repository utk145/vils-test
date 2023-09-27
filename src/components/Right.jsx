import React from 'react'

const Right = () => {
    return (
        <div className='right'>
            <div className="right_arrow">
                <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
            <div className='right_1'><p>Results</p></div>
            <div className='right_2'>
                <p>Results</p>
                <p>Score: 74%</p>
            </div>
            <div className="right_3">
                <div className="pie_chart">

                </div>
                <p>
                    Correct Answer <span style={{ color: "#235784" }}></span><br />
                    Not Answered <span style={{ color: "#bcdbdf" }}></span><br />
                    Wrong <span style={{ color: "#40a8c4" }}></span>
                </p>
            </div>
            <div className="right_4">               
                <table className="analytics-table">
                    <tbody>
                        <tr>
                            <td colSpan="3" className="header-cell">
                                Analytics
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3" style={{fontWeight:"bold"}}>Correct Answer: <span>9</span></td>
                        </tr>
                        <tr>
                            <td colSpan="3" style={{fontWeight:"bold"}}>Wrong Answer: <span>1</span></td>
                        </tr>
                        <tr>
                            <td colSpan="3" style={{fontWeight:"bold"}}>Unanswered: <span>1</span></td>
                        </tr>
                        <tr>
                            <td colSpan="3" style={{opacity:".6"}}>Skipped: <span>0</span></td>
                        </tr>
                        <tr>
                            <td colSpan="3" style={{opacity:".6"}}>Out of time: <span>0</span></td>
                        </tr>
                        <tr>
                            <td colSpan="3" style={{fontWeight:"bold"}}>Time used: <span>2:30</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Right