import './scss/main.scss'

function App() {
  return (
    <main className="wrapper">
      <article className="card">
        <header className="card__header">
          <span className="card__header-overlay"></span>
        </header>
        <div className="card__body">
          <h1 className="card__title">
            Get <span className="violet">insights</span> that help your business grow.
          </h1>
          <p className="card__des">
            Discover the benefits of data analytics and make better decisions regarding revenue, customer
            experience, and overall efficiency.
          </p>
          <div className="card__stats-container">
            <p className="card__stats">
              <span className="card__stat">10k+</span> companies
            </p>
            <p className="card__stats">
              <span className="card__stat">314</span> templates
            </p>
            <p className="card__stats">
              <span className="card__stat">12m+</span> queries
            </p>
          </div>
        </div>
      </article>

    </main>

  );
}

export default App;
