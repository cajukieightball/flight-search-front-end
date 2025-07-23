import FlightCard from "./FlightCard";
import { Link } from "react-router-dom";

export default function FlightList({ flights }) {
  return (
    <div>
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}

      <Link to="/" className="btn">
        Back to Search
      </Link>
    </div>
  );
}
