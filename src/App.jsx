import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Diskusi from "./pages/komunitas-diskusi";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/diskusi" element={<Diskusi />} />
      </Routes>
    </Router>
  )
}

export default App;