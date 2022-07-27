import BestRated from "../components/BestRated";
import Categories from "../components/Categories";
import Subscribe from "../components/Subscribe";
import Benefits from "../components/Benefits";
import ShowAll from "../components/ShowAll";

function Home () {
    return (
        <div>
            <ShowAll />
            <Categories />
            <BestRated />
            <Benefits />
            <Subscribe />
        </div>
        
    );
}

export default Home;