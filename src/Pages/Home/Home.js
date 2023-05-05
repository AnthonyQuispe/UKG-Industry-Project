import './Home.scss';
import logo from "../../assets/logo-green.png"
import SignIn from '../../components/SignIn/SignIn';
import PointsCard from '../../components/PointsCard/PointsCard';

function Home (){
    return(
        <section>
            <div>
                <img src={logo}alt="logo" />
                <SignIn/>
                <PointsCard />
            </div>
        
        </section>
    );
}

export default Home;