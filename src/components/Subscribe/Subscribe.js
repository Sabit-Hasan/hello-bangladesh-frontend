import './Subscribe.css';

import { KeyWest } from '../../assets/keywest.jpg';

export default function Subscribe() {
    return (
        <>
            <div className="subscribe">
                <div className="container">
                    <h1 style={{ textAlign: 'center', margin: '1em 0'}}>Subscribe Us</h1>
                    <div className="inner-container">
                        <h2>You Can Subscribe Us</h2>
                        <form action="" className="form">
                            <input type="email" name="email" id="email" />
                            <button>Subscribe</button>
                        </form> 
                    </div>
                </div>
            </div>
        </>
    )
}