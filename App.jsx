
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login';
import Profile from './Components/profile';

function App() {
 

  return (
  <UserContextProvider>
  <h2>Context API</h2>kk
  <Login />
  <Profile />
  
  </UserContextProvider>
  )
}

export default App
