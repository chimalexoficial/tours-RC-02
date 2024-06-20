import { useEffect } from "react";
import { useState } from "react";
import { Loading } from "./components/Loading";
import { Tours } from "./components/Tours";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // const removeTours = (id) => {
  //   const newTours = tours.filter((toursFilter) => {
  //      return toursFilter.id !== id;
  //   })
  //   setTours(newTours);
  // }

  const removeTour = (id) => {
    const newTours = tours.filter(toursFilter => toursFilter.id !== id)
    setTours(newTours);
  }

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const req = await fetch(url);
      const res = await req.json();
      setTours(res);

    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
      fetchData();
  }, []);

  if(isLoading) { //loading === true
    return <main>
      <Loading />
    </main>
  }

  if(tours.length === 0) {
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        <button
        type="btn"
        style={{marginTop: '2rem'}}
        className="btn"
        onClick={fetchData}>Refresh</button>
      </div>
    </main>
  }


  return <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>;
};
export default App;
