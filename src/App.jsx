import { Route, Routes, BrowserRouter } from "react-router-dom"
import Menu from "./menu-bar/menu-bar"
import PageNotfound from "./page-notfound/page-notfound"
import Home from "./home-page/home"

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<PageNotfound/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
