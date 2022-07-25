import BestRated from "../components/BestRated";
import Categories from "../components/Categories";
import Subscribe from "../components/Subscribe";
import Benefits from "../components/Benefits";

function Home () {
    return (
        <div>
            <Categories />
            <BestRated />
            <Benefits />
            <Subscribe />
        </div>
        
    );
}

export default Home;