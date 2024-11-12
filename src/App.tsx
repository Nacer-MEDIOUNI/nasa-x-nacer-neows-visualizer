import "./index.css";
import Chart from "./components/Chart";
import useFetchNasaDataHook from "./utils/hooks/useFetchNasaDataHook";
import { useState } from "react";
import TableView from "./components/Table";

const App = () => {
  const { data, loading, error } = useFetchNasaDataHook();
  const [isChartView, setIsChartView] = useState(true);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-full mx-auto my-10 gap-x-4">
          <img
            className="w-20 h-20"
            src="https://api.nasa.gov/assets/img/favicons/favicon-192.png
    "
            alt="NASA Logo"
          />
          <span className=" font-bold">X</span>
          <img
            className="w-20 h-20 rounded-xl"
            src="https://play-lh.googleusercontent.com/gnKX2tsDoyXXXXh4cg_jgdljnI67weG226bZ0wgQuS2YQf_NN5AybH5a78Vsh83O-A
    "
            alt="MISpay Logo"
          />
        </div>
        <p className="font-bold">Loading ...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-full mx-auto my-10 gap-x-4">
          <img
            className="w-20 h-20"
            src="https://api.nasa.gov/assets/img/favicons/favicon-192.png
"
            alt="NASA Logo"
          />
          <span className=" font-bold">X</span>
          <img
            className="w-20 h-20 rounded-xl"
            src="https://play-lh.googleusercontent.com/gnKX2tsDoyXXXXh4cg_jgdljnI67weG226bZ0wgQuS2YQf_NN5AybH5a78Vsh83O-A
"
            alt="MISpay Logo"
          />
        </div>
        <p className="font-bold">Error fetching data: {error.message}</p>
      </div>
    );
  }
  console.log(data);
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-full mx-auto my-10">
        <img
          className="w-20 h-20"
          src="https://api.nasa.gov/assets/img/favicons/favicon-192.png
        "
          alt="NASA Logo"
        />
        <img
          className="w-20 h-20 rounded-xl"
          src="https://play-lh.googleusercontent.com/gnKX2tsDoyXXXXh4cg_jgdljnI67weG226bZ0wgQuS2YQf_NN5AybH5a78Vsh83O-A
        "
          alt="MISpay Logo"
        />
      </div>
      <h1 className="text-4xl font-extrabold text-center mb-10">
        Welcome to the Near-Earth Object (NEO) viewer. This application uses
        data from NASA. You can view the data in a table or chart format.
      </h1>

      <div className="w-full flex items-center justify-center gap-8 mx-auto px-10">
        <p className="font-bold">Switch to</p>

        <button
          className="w-fit p-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg"
          onClick={() => setIsChartView(!isChartView)}
        >
          Switch to {isChartView ? "Table View" : "Chart View"}
        </button>
      </div>
      {/* {loading && <p>Loading...</p>}
      {error && <p>{error}</p>} */}

      {isChartView ? (
        <div className="relative w-full flex justify-center items-center p-20">
          <h1 className="absolute left-0 text-base font-bold -rotate-90 py-10">
            Near-Earth Objects
          </h1>
          {data.length > 0 ? <Chart data={data} /> : <p>No data available</p>}
        </div>
      ) : (
        <div className=" w-full flex flex-wrap justify-center items-center p-20">
          {data.length > 0 ? (
            <TableView data={data} />
          ) : (
            <p>No data available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
