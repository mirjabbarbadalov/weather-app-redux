import Card from "./Card";
import Loading from "./Loading";
import Error from "./Error";
import { useSelector } from "react-redux";

export default function WeatherCard() {
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);
  const success = useSelector((state) => state.weather.success);

  return (
    <div className="card">
      {success && <Card />}
      {loading && <Loading />}
      {error && <Error />}
    </div>
  );
}
