import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";

export default function SearchForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const canSearch = from.trim() != "" && to.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSearch) return;
    setIsSearching(true);

    setTimeout(() => {
      navigate(`/results?from=${from.trim()}&to=${to.trim()}`);
    }, 1000);
  };

  return (
    <div className="page-centre">
      <form onSubmit={handleSubmit}>
        <label>
          From:
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </label>
        <br />
        <label>
          To:
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </label>
        <br />

        <button type="submit" disabled={!canSearch || isSearching}>
          {isSearching ? "Searching..." : "Search Flights"}
        </button>

        {isSearching && <div className="spinner" />}
      </form>
    </div>
  );
}
