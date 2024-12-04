import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import AddNumber from './Components/AddNumber/AddNumber'
import EditNumber from './Components/EditNumber/EditNumber'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/addnumber' Component={AddNumber}/>
        <Route path='/editnumber' Component={EditNumber}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
