import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Postview from "./components/Postview";
import Landingpage from "./components/Landingpage";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/posts" element={<Postview />} />
          <Route path="/createpost" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
