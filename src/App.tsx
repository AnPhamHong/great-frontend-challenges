import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { challengeRoutes } from "./challenges";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          Great Frontend Challenges 💻
        </h1>

        <Routes>
          {challengeRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={<div>404 - Không tìm thấy bài này 😢</div>}
          />
        </Routes>
      </div>
    </Router>
  );
}
