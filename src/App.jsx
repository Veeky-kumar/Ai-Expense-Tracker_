import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Layout from "./components/layout/Layout"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout/Layout"


function App() {

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
        <Route path='/api/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
