import "./index.css";
import BarChartComponent from "./components/Chart";
import useFetchNasaDataHook from "./utils/hooks/useFetchNasaDataHook";

const App = () => {
  const { data, loading, error } = useFetchNasaDataHook();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="relative w-full flex justify-center items-center p-40">
      <h1 className="absolute left-0 text-base font-bold -rotate-90">
        Near-Earth Objects
      </h1>
      {data.length > 0 ? (
        <BarChartComponent data={data} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default App;
