import { BrowserRouter, Routes, Route } from "react-router-dom";
import MusicPage from "./MusicPage";
import ButtonDirect from "./ButtonDirect";
import "./App.css";
import Card from "./Card";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <div>
              <Card />
              <ButtonDirect />
            </div>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
