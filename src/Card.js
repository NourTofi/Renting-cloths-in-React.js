function Card({ price, imag, city, typ }) {
    return (
            <div className="card">
                <div>
                    <img src={imag} className="imag" />
                </div>
                <div >
                    <p className="typ">{typ}</p>
                    
                </div>
                <div className="price">
                    {price}
                </div>
                <div className="city">
                    {city}
                </div>
            </div>
    );
}

export default Card;