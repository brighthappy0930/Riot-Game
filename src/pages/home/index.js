import Happening from "../../components/home/happening";
import Entertainment from "../../components/home/entertainment";
import Esports from "../../components/home/esport";

function Home() {
  return (
    <div className="bg-black">
      <Happening />
      
      <Esports />

      <Entertainment />
    </div>
  );
}

export default Home;
