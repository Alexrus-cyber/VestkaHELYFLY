import './App.css';
import {Header} from "./Components/Header";
import {Hero} from "./Sections/Hero";
import {Photoshoot} from "./Sections/Photoshoot";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Photoshoot/>
        </div>
    );
}

export default App;
