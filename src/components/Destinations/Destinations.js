import Boradbora from '../../assets/borabora.jpg';
import Boradbora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import Maldives3 from '../../assets/maldives3.jpg';

import './Destinations.css';

export default function Destinations() {
    return (
        <>
            <div className="destinations">
                <div className="container">
                    <h1>All-Inclusive Places</h1>
                    <p>On Country of Green Land</p>

                    <div className="image-container">
                        <img className="span-3 image-grid-row-2" src={Boradbora} alt="Boradbora" />
                        <img src={Boradbora2} alt="Boradbora2" />
                        <img src={Maldives} alt="Maldives" />
                        <img src={Maldives2} alt="Maldives2" />
                        <img src={Maldives3} alt="Maldives3" />
                    </div>
                </div>
            </div>
        </>
    )
}