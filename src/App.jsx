import Header from "./components/Header";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherSection";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <WeatherCard />
    </div>
  );
}
