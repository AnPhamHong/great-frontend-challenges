import { challengeRoutes } from "../challenges";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <nav className="flex flex-col gap-2">
      {challengeRoutes.map(({ path, title }) => (
        <Link
          key={path}
          to={path}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
