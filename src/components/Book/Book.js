import './Book.css';

export default function Book() {
    return (
        <>
            <div className="book">
                <div className="container">
                    <h1>Book Now</h1>
                    <p>Its The Right Time To Book</p>
                </div>

                <form action="" className="book-form">
                    <div className="inner-items">
                        <div className="cloc-dest">
                            <div>
                                <label htmlFor="clocation">Current Location</label> <br />
                                <input type="text" name="clocation" id="clocation" placeholder="Current Location" required />
                            </div>
                            <div>
                                <label htmlFor="destination">Destination</label> <br />
                                <input type="text" name="destination" id="destination" placeholder="Destination" required />
                            </div>
                        </div>
                        <div className="check-in-out">
                            <div>
                                <label htmlFor="check-in">Check-In</label> <br />
                                <input type="date" name="check-in" id="check-in" placeholder="Check-In" />
                            </div>
                            <div>
                                <label htmlFor="check-out">Check-Out</label> <br />
                                <input type="date" name="check-out" id="check-out" placeholder="Check-Out" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Book Now</button>
                    </div>
                </form>
            </div>
        </>
    )
}