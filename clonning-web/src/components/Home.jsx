import "./Home.css"
import Character from "./home-component'/Character";
import PreRegister from "./home-component'/PreRegister";
import Reward from "./home-component'/Reward";
import Slideshow from "./home-component'/Slideshow";
import Social from "./home-component'/Social";
const Home=()=>{
    return(
        <section className="section home">
            <div className="logo">
                <img src="https://www.12tails-th.com/assets/img/static/logo.png"></img>
            </div>
            <div className="body">
                <Slideshow/>
                <PreRegister/>
                <Reward/>
                <Character/>
                <Social/>
            </div>
        </section>
    )
}
export default Home;