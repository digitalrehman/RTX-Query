function Card({items}) {
  
  let { title, description } = items;
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-3 text-xl font-semibold text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </article>
  );
}

export default Card;
