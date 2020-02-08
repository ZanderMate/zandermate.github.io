import React, { setState } from "react";

const CardOfDay = () => {
    const [picSrc, setPicSrc] = setState("assets/images/grenzo-card.jpg");
    const [cardName, setCardName] = setState("Grenzo, Dungeon Warden");
    return (
        <div className="card">
            <img className="card-img-top" src={picSrc} alt="CoD"></img>
            <div className="card-body">
                <h5 className="card-text text-center">{cardName}</h5>
                <p className="card-text text-center">Card of the Day</p>
            </div>
        </div>
    )
}

export default CardOfDay;