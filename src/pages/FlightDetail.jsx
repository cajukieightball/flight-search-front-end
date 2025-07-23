// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// const api = import.meta.env.VITE_API_URL;

// function FlightDetail() {
//   const { id } = useParams();
//   const [flight, setFlight] = useState(null);

//   useEffect(() => {
//     fetch(`${api}/flights/${id}`, {
//       credentials: 'include'
//     })
//       .then(res => {
//         if (!res.ok) throw new Error('Unauthorized or not found');
//         return res.json();
//       })
//       .then(data => setFlight(data))
//       .catch(err => alert(err.message));
//   }, [id]);

//   if (!flight) return <p>Loading flight details...</p>;

//   return (
//     <div>
//       <h2>Flight Detail</h2>
//       <p><strong>From:</strong>      {flight.from}</p>
//       <p><strong>To:</strong>        {flight.to}</p>
//       <p><strong>Airline:</strong>   {flight.airline}</p>
//       <p><strong>Price:</strong>     ${flight.price}</p>
//       <p><strong>Departure:</strong> {flight.departureTime}</p>
//     </div>
//   );
// }

// export default FlightDetail;


import { useEffect, useState } from 'react';
import { useParams }          from 'react-router-dom';

const api = import.meta.env.VITE_API_URL;

export default function FlightDetail() {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    fetch(`${api}/flights/${id}`, {
      credentials: 'include'
    })
      .then(res => {
        if (!res.ok) throw new Error('Unauthorized or not found');
        return res.json();
      })
      .then(data => setFlight(data))
      .catch(err => alert(err.message));
  }, [id]);

  if (!flight) return <p>Loading flight details...</p>;

  return (
    <div>
      <h2>Flight Detail</h2>
      <p><strong>From:</strong>      {flight.from}</p>
      <p><strong>To:</strong>        {flight.to}</p>
      <p><strong>Airline:</strong>   {flight.airline}</p>
      <p><strong>Price:</strong>     ${flight.price}</p>
      <p><strong>Departure:</strong> {flight.departureTime}</p>
    </div>
  );
}

