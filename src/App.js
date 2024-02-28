import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          {/* <Route path='/tintuc' element={<TinTuc />} />
                    <Route path='/danhmuc/:cId' element={<DanhMuc />} />
                    <Route path='/chitiet/:dId' element={<ChiTiet />} />
                    <Route path='/lienhe' element={<LienHe />} /> */}
        </Routes>
      </Router>
    </>
  )
}
