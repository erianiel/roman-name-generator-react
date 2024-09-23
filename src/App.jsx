import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Howitworks from "./pages/Howitworks";
import { NamesProvider } from "./contexts/NamesContext";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <NamesProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="howitworks" element={<Howitworks />} />
          </Route>
        </Routes>
      </NamesProvider>
    </BrowserRouter>
  );
}

export default App;
