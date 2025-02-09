import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import ServicePage from "./Page/ServicePage";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
