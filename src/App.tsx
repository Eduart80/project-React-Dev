import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home'
import FlagInfo from './Page/Flag/FlagInfo'
import NoPage from './Page/NoPage/NoPage'
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <>
    <NavBar/>
     <Routes>
      <Route path={'/'} element={<Home />}/>
      <Route path={'/flagInformation'} element={<FlagInfo />}/>
      <Route path={'/*'} element={<NoPage />}/>
     </Routes>
    </>
  )
}

export default App
