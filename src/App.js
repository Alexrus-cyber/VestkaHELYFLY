import './App.css';
import {Header} from "./Components/Header";
import {Hero} from "./Sections/Hero/index";
import {Photoshoot} from "./Sections/Photoshoot/index";
import {TimeShoot} from "./Sections/TimeShoot/index";
import {Map} from "./Sections/Map/index";
import {Reviews} from "./Sections/Reviews/index";
import {Footer} from "./Components/Footer";

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
