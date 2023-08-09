import { useSelector } from "react-redux";

export default function Error() {
  const errorMessage = useSelector((state) => state.weather.errorMessage);
  return <p className="error-message">{errorMessage}</p>;
}
