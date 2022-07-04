import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/App.css";
import NotFount from "./views/404";
import DashboardUi from "./views/DashboardUi";
import UsersList from "./views/UsersList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/profile/:id" element={<DashboardUi />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </Router>
  );
}

export default App;
