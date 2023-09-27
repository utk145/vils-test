import SideNav from "./components/SideNav"
import "./allStyles.css"
import MidUp from "./components/MidUp"
import MidDown from "./components/MidDown"
import Right from "./components/Right"

function App() {


  return (
    <div className="app">
      <SideNav />
      <div className="mid">
        <MidUp />
        <MidDown />
      </div>
      <Right/>
    </div>
  )
}

export default App
