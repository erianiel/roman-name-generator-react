import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Howitworks from "./pages/Howitworks";
import { NamesProvider } from "./contexts/NamesContext";

function App() {
  return (
    <BrowserRouter>
      <NamesProvider>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="howitworks" element={<Howitworks />} />
        </Routes>
      </NamesProvider>
    </BrowserRouter>
  );
}

export default App;
