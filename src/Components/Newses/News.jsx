const News = ({ news }) => {
  const { title, category, date, description, source } = news || {};
  return (
    <div className="card max-w-sm h-[350px] border border-purple-800 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title text-purple-600">{category}</h2>

        <p>{description}</p>
        <div className="card-actions text-pink-600 flex-col">
          <h2 className="card-title">{source}</h2>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
