import "../assets/styles/layout.scss";
import GameCard from "./GameCard";

export default function Home({ games }) {

  const [search, setSearch] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = async() => {
    fetch(`https://zelda.fanapis.com/api/games?name=${search}`)
    .then(response => response.json());
  };

  return (
    <main>
      <h1>Forside</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Her kan du søke etter spill</label>
        <input type="search" id="search" onChange={handleChange}></input> 
        <button onClick={handleClick}>Søk etter spill</button>
        </form>
      <section className="flex-section">
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>
    </main>
  );
}