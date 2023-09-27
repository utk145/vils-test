import React from 'react'

const SideNav = () => {
  return (
    <div className='side_nav'>
      <div className="side_nav_img_container">
        <img src="https://vils.ai/wp-content/themes/hello-elementor/assets/img/logo.png" alt="company-logo" className='side_nav_img' />
      </div>
      <div className="side_nav_dash_outer">
        <div className="side_nav_dash_container">
          <div className="svg_cont">
            <img width="25" height="25" src="https://img.icons8.com/ios/50/laptop-metrics--v1.png" alt="laptop-metrics--v1" />
          </div>
          <a href="#">Dashboard</a>
        </div>
        <div className="side_nav_dash_container">
          <div className="svg_cont">
            <img width="25" height="25" src="https://img.icons8.com/ios/50/classroom.png" alt="classroom" />
          </div>
          <a href="#">1 on 1 Mentor</a>
        </div>
        <div className="side_nav_dash_container">
          <div className="svg_cont">
            <img width="25" height="25" src="https://img.icons8.com/ios/50/bot.png" alt="bot" />
          </div>
          <a href='#'>Mock Interviews</a>
        </div>
        <div className="side_nav_dash_container">
          <div className="svg_cont">
            <img width="25" height="25" src="https://img.icons8.com/color/48/rehearse.png" alt="rehearse" />
          </div>
          <a>Practice</a>
        </div>
        <div className="side_nav_dash_container">
          <div className="svg_cont">
            <img width="25" height="25" src="https://img.icons8.com/ios/50/open-book--v1.png" alt="open-book--v1" />
          </div>
          <a href="#">Communication</a>
        </div>
        <div className="side_nav_dash_container active">
          <div className="svg_cont">
            <img width="25" height="25" src="https://img.icons8.com/ios/50/pie-chart-report.png" alt="pie-chart-report" />
          </div>
          <a>Reports</a>
        </div>
        <div className="side_nav_dash_container">
          <div className="svg_cont">
            <img width="25" height="25" src="https://img.icons8.com/ios/50/gear.png" alt="gear" />
          </div>
          <a href="#">Settings</a>
        </div>
      </div>
      
    </div>
  )
}

export default SideNav