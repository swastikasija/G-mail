import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AllMails from './pages/AllMails'
import MenuBar from './components/MenuBar'
import Mail from './pages/Mail'
import Home from './components/Home'
 
function App() {

  return (
    <>
      <MenuBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllMails />} />
          <Route path={`/id/:mailId`} element={<Mail />} />
        </Routes>
      </BrowserRouter>
      <Home/>
    </>
  )
}




export default App
