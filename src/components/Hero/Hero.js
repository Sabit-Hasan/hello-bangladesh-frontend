import Video from '../../assets/bangladesh.mp4';
import { AiOutlineSearch } from 'react-icons/ai';
import './Hero.css';


export default function Hero() {
    return (
        <>
            <div className="hero">
                <video autoPlay loop muted id="video">
                    <source src={Video} type="video/mp4" />
                </video>
                <div className="overlay"></div>

                <div className="content">
                    <h1>First Class Travel</h1>
                    <h2>Best Locations In Bangladesh</h2>

                    <form action="" className="form">
                        <div>
                            <input type="search" name="search" id="search" placeholder="Search Destination" />
                        </div>
                        <div>
                            <button><AiOutlineSearch className="icon" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}