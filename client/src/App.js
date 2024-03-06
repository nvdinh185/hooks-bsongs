import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Cat from "./pages/Cat";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cat' element={<Cat />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </Router>
  )
}
