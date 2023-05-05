import "./Home.scss";
import logo from "../../assets/logo-green.png";
import SignIn from "../../components/SignIn/SignIn";
import Button from "../../components/Button/Button";

function Home() {
    return (
        <section className="home">
            <div className="home__container">
                <div className="home__logo-container">
                    <img src={logo} alt="ukg logo" className="home__logo" />
                </div>
                <SignIn />
                <Button />
            </div>
        </section>
    );
}

export default Home;
