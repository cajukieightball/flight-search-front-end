import { Link } from "react-router-dom";

export default function NoResults({ from, to }) {
  return (
    <div>
      <h2>No Results</h2>
      <p>
        Sorry, we couldn't find any flights from {from} to {to}.
      </p>

      <Link to="/" className="btn">
        Back to Search
      </Link>
    </div>
  );
}
