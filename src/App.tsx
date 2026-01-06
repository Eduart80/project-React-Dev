import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home'
import NoPage from './Page/NoPage/NoPage'
import FlagCard from './Components/FlagCard/FlagCard'

function App() {

  return (
    <>
     <Routes>
      <Route path={'/'} element={<Home />}/>
      <Route path={'/country/:countryName'} element={<FlagCard />}/>
      <Route path={'/country/neighbour/:countryName'} element={<FlagCard />}/>
      <Route path={'/*'} element={<NoPage />}/>
     </Routes>
    </>
  )
}

export default App
