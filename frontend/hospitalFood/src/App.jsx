import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ReservationForm from './components/FoodBook'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/food-reservation' element={<ReservationForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
