import Tuiter from "./tuiter";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Tuiter/>} />
          <Route path="/home" element={<Tuiter/>} />
          <Route path="/*" element={<Tuiter/>} />
          <Route path="/tuiter/*" element={<Tuiter/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;



