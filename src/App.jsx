import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Howitworks from "./pages/Howitworks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="howitworks" element={<Howitworks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
