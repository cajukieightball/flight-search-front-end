// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import FlightList from "../components/FlightList";
// import NoResults from "../components/NoResults";

// const api = import.meta.env.VITE_API_URL;

// export default function Results() {
//   const [searchParams] = useSearchParams();
//   const from = searchParams.get("from");
//   const to = searchParams.get("to");

//   if (!from || !to) {
//     return <p>Waiting for search parameters…</p>;
//   }


//   //Graphql
//   // const { loading, error, data } = useQuery(GET_FLIGHTS, {
//   //   variables: { from, to },
//   // });

//   // if (loading) return <p>Loading flights...</p>;
//   // if (error) return <p>Error loading flights.</p>;

//   // const flights = data?.flights || [];

//   // if (flights.length === 0) {
//   //   return <NoResults from={from} to={to} />;
//   // }

//   // return (
//   //   <div>
//   //     <h2>
//   //       Flights from {from} to {to}
//   //     </h2>
//   //     <FlightList flights={flights} />
//   //   </div>
//   // ) ;


//   //REst-api
//   const [flights, setFlights] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setIsLoading(true);

//    fetch(`${api}/api/flights?from=${from}&to=${to}`)
//       // .then((res) => res.json())
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`Network response was not OK (${res.status})`);
//         }

//         return res.json();
//       })

//       .then((data) => {
//         setFlights(data.data); // use .data only if paginated
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching flights:", err);
//         setFlights([]);
//         setIsLoading(false);
//       });
//   }, [from, to]);



//   //temporary/testing flight(local JSON)
//   // const timer = setTimeout(() => {
//   //   fetch("/src/data/flights.json")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       const results = data.filter(
//   //         (f) =>
//   //           f.from.toLowerCase() === from.toLowerCase() &&
//   //           f.to.toLowerCase() === to.toLowerCase()
//   //       );
//   //       setFlights(results);
//   //       setIsLoading(false);
//   //     });
//   // }, 1000);

//   //   return () => clearTimeout(timer);
//   // }, [from, to]);

//   if (isLoading) return <p>Loading flights...</p>;
//   if (flights.length === 0) {
//     return <NoResults from={from} to={to} />;
//   }

//   return (
//     <div>
//       <h2>
//         Flights from {from} to {to}
//       </h2>
//       <FlightList flights={flights} />
//     </div>
//   );
// }









import { useSearchParams } from 'react-router-dom';
import { useEffect, useState }   from 'react';
import FlightList                from '../components/FlightList';
import NoResults                 from '../components/NoResults';

const api = import.meta.env.VITE_API_URL;

export default function Results() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from');
  const to   = searchParams.get('to');

  if (!from || !to) {
    return <p>Waiting for search parameters…</p>;
  }

  const [flights,  setFlights]  = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${api}/flights?from=${from}&to=${to}`)
      .then(res => {
        if (!res.ok) throw new Error(`Error (${res.status})`);
        return res.json();
      })
      .then(data => {
        setFlights(data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching flights:', err);
        setFlights([]);
        setIsLoading(false);
      });
  }, [from, to]);

  if (isLoading) return <p>Loading flights...</p>;
  if (flights.length === 0) {
    return <NoResults from={from} to={to} />;
  }

  return (
    <div>
      <h2>Flights from {from} to {to}</h2>
      <FlightList flights={flights} />
    </div>
  );
}
