import React from 'react'

const MidDown = () => {
  return (
    <div className='mid_down'>
      <h2>Management Score:</h2>
      <div className="mid_down_1">
        <div className='mid_down_1_i'>
          <div className="mid_down_1_i_a">
            <div className="circle_container">
              <div className="circle_1" style={{"--i":59}}>
                <div className="value_container">59</div>
              </div>
            </div>
            <span style={{color:"#159df8"}}>Score: 59%</span>
          </div>
          <div style={{padding:"20px"}}>
            <p style={{fontWeight:"bold"}}>Focus Management</p>
            <p>Focus Score: A powerful indicator of your ability to stay in the zone, track progress, and channel your undivided attention towards your goals.</p>
          </div>
        </div>
        <div className='mid_down_1_i'>
          <div className="mid_down_1_i_a">
            <div className="circle_container">
              <div className="circle_2" style={{"--i":89}}>
                <div className="value_container">89</div>
              </div>
            </div>
            <span style={{color:"#02bc62"}}>Score: 89%</span>
          </div>
          <div style={{padding:"20px"}}>
            <p style={{fontWeight:"bold"}}>Time Management</p>
            <p> The art of optimizing your daily activities to make the most of your valuable hours, achieving productivity, balance, and personal growth.</p>
          </div>
        </div>
        <div className='mid_down_1_i'>
          <div className="mid_down_1_i_a">
            <div className="circle_container">
              <div className="circle_3" style={{"--i":39}}>
                <div className="value_container">39</div>
              </div>
            </div>
            <span style={{color:"#e26161"}}>Score: 39%</span>
          </div>
          <div style={{padding:"20px"}}>
            <p style={{fontWeight:"bold"}}>Critical Thinking</p>
            <p>The intellectual skill that empowers individuals to analyze, evaluate, and synthesize information, fostering sound decision-making and innovative problem-solving.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidDown