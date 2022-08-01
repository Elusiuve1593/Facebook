import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import avatar from "./assets/image/photo.JPG"

function App() {
    const mainPhoto = {
        backgroundImage: `url(${avatar})`
    }
    return (
        <div className="App">
            <Header/>
            <Main style={mainPhoto}/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
