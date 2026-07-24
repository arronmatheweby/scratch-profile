import { Route, Routes, HashRouter } from "react-router-dom"
import Menu from "./menu-bar/menu-bar"
import PageNotfound from "./page-notfound/page-notfound"
import Home from "./home-page/home"

function App() {
  return (
    <>
      <HashRouter>
      <Menu/>
      <Routes>
        <Route path="/#" element={<Home/>} />
        <Route path="*" element={<PageNotfound/>} />
      </Routes>
      </HashRouter>
    </>
  )
}

export default App
