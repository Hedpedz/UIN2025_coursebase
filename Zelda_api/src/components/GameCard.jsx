import { Link } from "react-router-dom";
import "../assets/styles/gameCard.scss";


export default function GameCard({ game }) {
  return (
    <article className="gameCard">
      <h3>{game.name}</h3>
      <p>{game.description}</p>
      <span>{game.released_date}</span>
      <Link to={`games/${game.id}`}>Gå til spill</Link>
    </article>
  );
}