import './Home.scss';
import logo from "../../assets/logo-green.png"
import SignIn from '../../components/SignIn/SignIn';

function Home (){
    return(
        <section>
            <div>
                <img src={logo}alt="" />
                <SignIn/>
            </div>
        
        </section>
    );
}

export default Home;