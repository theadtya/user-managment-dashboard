
import { useContext } from 'react'
import './App.css'
import UserTable from './components/userTable'
import { ThemeContext, UserContext } from './context/userContext'

function App() {

   const userContext= useContext(UserContext)
   const themeContext= useContext(ThemeContext)


  return (
    <div> 
      <UserContext.Provider value={userContext}>
        <ThemeContext.Provider value={themeContext}>
            <UserTable userData= {userContext}/>
        </ThemeContext.Provider>
      </UserContext.Provider>
     
    </div>
  )
}

export default App
