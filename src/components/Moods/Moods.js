import verySatisfied from '../../assets/icons/wonderful.png';
import happy from '../../assets/icons/happy.png';
import neutral from '../../assets/icons/so-so.png';
import unhappy from '../../assets/icons/unhappy.png';
import Chatgpt from '../ChatGpt/Chatgpt';

const Moods = () => {

    const [showSeciBotModal, setShowCeciBotModal] = useState(false);

    const handleOpenCeciBot = () => {
        setShowCeciBotModal(true);
    };


    return (
        <div> 
            <img src={verySatisfied} alt='very satisfied face' onClick={() => handleOpenCeciBot()}></img>
            <img src={happy} alt='happy face' onClick={() => handleOpenCeciBot()}></img>
            <img src={neutral} alt='neutral face' onClick={() => handleOpenCeciBot()}></img>
            <img src={unhappy} alt='unhappy face' onClick={() => handleOpenCeciBot()}></img>
            <div>
                {showSeciBotModal && (<Chatgpt setShowCeciBotModal={setShowCeciBotModal}/>)}
            </div>
        </div>
    )
}

export default Moods;

