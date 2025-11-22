import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'
import LessonsPage from './Pages/LessonsPage/LessonsPage'
import DirectionPage from './Pages/DirectionPage/DirectionPage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}> </Route>
        <Route path='/Naprav' element={<LessonsPage/>}> </Route>
        <Route path='/Direction' element={<DirectionPage/>}> </Route>
      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
