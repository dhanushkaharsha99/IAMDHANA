import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "./Pages/Demo"; // Fixed path
import ScrollToTop from "./ScrollToTop";
import Landing from "./Pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo/:category" element={<Demo />} />{" "}
        {/* Changed 'type' to 'category' */}
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;