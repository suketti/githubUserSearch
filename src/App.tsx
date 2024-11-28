import Header from "./components/Header/Header"
import Searchbar from "./components/Searcbar/Searchbar"
import Userdata from "./components/Userdata/Userdata"
import './app.css'
import { useEffect, useState } from "react"
import { userType } from "./type/type"

function App() {

  const [darkMode, setDarkmode] = useState(false)
  const [user, setUserData] = useState<userType>()

  const toggleDarkMode = () => {
    setDarkmode(prev => !prev)
  }

  const handleUserChange = (user: userType) => {}

  useEffect(() => {
    document.body.className = `${darkMode? 'dark' : 'light'}`
  }, [darkMode])

  return (
      <div className="app ">
        <div className="container">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}></Header>
          <Searchbar saveUserData={handleUserChange}></Searchbar>
          <Userdata user={user}></Userdata>
        </div>
      </div>
  )
}

export default App
