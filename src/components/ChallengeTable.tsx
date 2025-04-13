import { Link } from "react-router-dom";
import { challengeRoutes } from "../challenges";

export default function ChallengeTable() {
  return (
    <div className="p-6 overflow-x-auto">
      <table className="min-w-full border border-zinc-300 dark:border-zinc-700 rounded-lg">
        <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100">
          <tr>
            <th className="py-3 px-4 text-left">Challenge</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">GitHub</th>
            <th className="py-3 px-4 text-left">Demo</th>
          </tr>
        </thead>
        <tbody>
          {challengeRoutes.map((c, i) => (
            <tr
              key={i}
              className="border-t border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
            >
              <td className="py-2 px-4">{`${i + 1} ${c.title}`}</td>
              <td className="py-2 px-4">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    c.status === "Done"
                      ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                      : c.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200"
                      : "bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  {c.status}
                </span>
              </td>
              <td className="py-2 px-4">
                {c.github ? (
                  <a
                    href={c.github}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                ) : (
                  "-"
                )}
              </td>
              <td className="py-2 px-4">
                {c.path ? (
                  <Link
                    key={c.path}
                    to={c.path}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
