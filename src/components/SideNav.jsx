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
          <h4>Dashboard</h4>
        </div>
        <div className="side_nav_dash_container">
          <div className="svg_cont">
            <img width="25" height="25" src="https://img.icons8.com/ios/50/classroom.png" alt="classroom" />
          </div>
          <h4>1 on 1 Mentor</h4>
        </div>
        <div className="side_nav_dash_container">
          <div className="svg_cont">
            <img width="25" height="25" src="https://img.icons8.com/ios/50/bot.png" alt="bot" />
          </div>
          <h4>Mock Interviews</h4>
        </div>
        <div className="side_nav_dash_container">
          <div className="svg_cont">
            <img width="25" height="25" src="https://img.icons8.com/color/48/rehearse.png" alt="rehearse" />
          </div>
          <h4>Practice</h4>
        </div>
        <div className="side_nav_dash_container">
          <div className="svg_cont">
            <img width="25" height="25" src="https://img.icons8.com/ios/50/open-book--v1.png" alt="open-book--v1" />
          </div>
          <h4>Communication</h4>
        </div>
        <div className="side_nav_dash_container active">
          <div className="svg_cont">
            <img width="25" height="25" src="https://img.icons8.com/ios/50/pie-chart-report.png" alt="pie-chart-report" />
          </div>
          <h4>Reports</h4>
        </div>
        <div className="side_nav_dash_container">
          <div className="svg_cont">
            <img width="25" height="25" src="https://img.icons8.com/ios/50/gear.png" alt="gear" />
          </div>
          <h4>Settings</h4>
        </div>
      </div>
      
    </div>
  )
}

export default SideNav