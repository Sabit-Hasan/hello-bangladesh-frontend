import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Boradbora from '../../assets/borabora.jpg';
import Boradbora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import Maldives3 from '../../assets/maldives3.jpg';

import './MyCarousel.css';

export default function MyCarousel() {
    return (
        <>
            <div className="my-carousel">
                <h1 style={{ textAlign: 'center', margin: '1em' }}>Our 64 Districts</h1>
                <p style={{ textAlign: 'center', margin: '1em 0' }}>A Country of Cultural and Ethnic Diversity</p>

                {/* React Responsive Carousel */}

                <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src={Maldives} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={Maldives2} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={Maldives3} />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={Boradbora} />
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <img src={Boradbora2} />
                        <p className="legend">Legend 5</p>
                    </div>
                </Carousel>
            </div>
            
        </>
    )
}