import React from "react";
import "../styles/style.css";

const picSrc = "assets/images/oko-card.jpg";
const cardName = "Oko, Thief of Crowns";

const styles = {
    card: {
        background: "#E1C932"
    },
    resourcePart: {
        color: "black",
        textAlign: "center",
        background: "#E1C932"
    },
    cardBody: {
        minHeight: "373px",
        background: "#FAF9F9"
    }
}

const RowOne = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div class="card">
                        <img className="card-img-top" src={picSrc} alt="CoD"></img>
                        <div class="card-body" style={styles.card}>
                            <h5 class="card-text text-center">{cardName}</h5>
                            <p class="card-text text-center">Card of the Day</p>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <h1 className="pt-3" style={styles.resourcePart}>Resources</h1>
                    <div className="row">
                        <div className="col-4">
                            <div className="card" style={styles.cardBody}>
                                <div className="card-body">
                                    <h5 className="card-title">Deck-Building</h5>
                                    <ul>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UCLsiaNUb42gRAP7ewbJ0ecQ">The Command Zone</a>
                                        </li>
                                        <li>
                                            <a href="https://edhrec.com/">EDHrec</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card" style={styles.cardBody}>
                                <div className="card-body">
                                    <h5 className="card-title">Gameplay</h5>
                                    <ul>
                                        <li>
                                            <a href="https://www.youtube.com/playlist?list=PLyLzs6vB3Xk75kjIm45DQLrR8oT63_OvD">Game Knights</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSNNRrpJjhf1WrwwuZqUcg0K">Commander VS</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UCYwsoqRNmyfM-E7tyQD4buw">Quest for the Janklord</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card" style={styles.cardBody}>
                                <div className="card-body">
                                    <h5 className="card-title">Shopping</h5>
                                    <ul>
                                        <li>
                                            <a href="https://www.youtube.com/playlist?list=PLyLzs6vB3Xk75kjIm45DQLrR8oT63_OvD">TCGPlayer</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSNNRrpJjhf1WrwwuZqUcg0K">Card Kingdom</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RowOne;