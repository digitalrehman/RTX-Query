import Card from "../components/Card";
import { useGetAllProductQuery } from "../store/slice";

function HomePage() {
  let { isError, error, data, isLoading } = useGetAllProductQuery();
  console.log(data);

  if (isLoading) {
    return <h1 className="text-xl font-bold">..Loading</h1>;
  }
  if (isLoading) {
    return <h1 className="text-xl font-bold">..Loading</h1>;
  }
  if (isError) {
    return <h1 className="text-xl font-bold">{error}</h1>;
  }
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-bold text-slate-900">RTX Query</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        React app with separated card component, Tailwind styling, and proper
        routing setup.
      </p>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <Card key={index} items={item} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default HomePage;
