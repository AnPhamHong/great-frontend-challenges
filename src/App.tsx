import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { challengeRoutes } from "@/challenges";
import Home from "@/pages/Home";
import ThemeToggle from "@/components/ThemeToggle";

export default function App() {
  return (
    <div
      className="p-4 min-h-screen dark:bg-dark-bg bg-[#ecf5fc] dark:text-white
    dark:bg-gradient-to-b dark:from-[#050a1d] dark:via-[#080f2c] dark:to-[#09153d]
    "
    >
      <div className="w-2/3 mx-auto mt-2">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-4">
            Great Frontend Challenges 💻
          </h1>
          <ThemeToggle />
        </div>
        <Router>
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
        </Router>
      </div>
    </div>
  );
}
