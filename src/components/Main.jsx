import Card from "./Card";
import champions from "../data/LeagueDB";
function Main() {
  return (
    <div className="container">
      <Card item={champions} className="" />
    </div>
  );
}
export default Main;
