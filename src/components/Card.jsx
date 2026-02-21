const cards = [
  {
    id: 1,
    title: "Fast Queries",
    description: "Optimized data fetching with clean component architecture.",
  },
  {
    id: 2,
    title: "Reusable UI",
    description: "Card component is modular and can be reused anywhere.",
  },
  {
    id: 3,
    title: "Routing Ready",
    description: "Pages are connected with React Router for proper navigation.",
  },
];

function Card() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
        Our Cards
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="mb-3 text-xl font-semibold text-slate-800">
              {item.title}
            </h3>
            <p className="text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Card;
