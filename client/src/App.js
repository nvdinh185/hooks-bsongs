import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/public/Index";
import Contact from "./pages/public/Contact";
import Cat from "./pages/public/Cat";
import Detail from "./pages/public/Detail";

import Admin from "./pages/admin/Index";
import Song from "./pages/admin/Song";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cat/:cId' element={<Cat />} />
        <Route path='/detail/:dId' element={<Detail />} />

        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/song' element={<Song />} />
      </Routes>
    </Router>
  )
}
