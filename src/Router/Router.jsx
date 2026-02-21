import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Card from "../components/Card";

function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-bold text-slate-900">RTX Query</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        React app with separated card component, Tailwind styling, and proper
        routing setup.
      </p>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-3xl font-bold text-slate-900">404 - Page Not Found</h2>
    </section>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "cards", element: <Card /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
