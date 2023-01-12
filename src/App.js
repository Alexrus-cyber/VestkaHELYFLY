import './App.css';
import {Header} from "./Components/Header/Header";
import {Hero} from "./Sections/Hero/Hero";
import {Photoshoot} from "./Sections/Photoshoot/Photoshoot";
import {TimeShoot} from "./Sections/TimeShoot/TimeShoot";
import {Map} from "./Sections/Map/Map";
import {Reviews} from "./Sections/Reviews/Reviews";
import {Footer} from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Photoshoot/>
            <TimeShoot/>
            <Map/>
            <Reviews/>
            <Footer/>
        </div>
    );
}

export default App;
