import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//routes
import LoginPage from './pages/login/login.js';
import DashBoard from "./pages/dashboard/dashboard.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={ <DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;