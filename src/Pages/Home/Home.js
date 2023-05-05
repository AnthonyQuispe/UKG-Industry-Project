import './Home.scss';
import logo from "../../assets/logo-green.png"
import SignIn from '../../components/SignIn/SignIn';
import Button from '../../components/Button/Button'

function Home (){
    return(
        <section className='home'>
            <div className='home__container'>
                <img src={logo} alt="ukg logo" />
                <SignIn/>
                <Button />
            </div>
        
        </section>
    );
}

export default Home;