import './App.css';
import {Header} from "./Components/Header";
import {Hero} from "./Sections/Hero";
import {Photoshoot} from "./Sections/Photoshoot";
import {TimeShoot} from "./Sections/TimeShoot";
import {Map} from "./Sections/Map";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Photoshoot/>
            <TimeShoot/>
            <Map/>
        </div>
    );
}

export default App;
