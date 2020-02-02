import React from "react";
import "../styles/style.css";

const picSrc = "assets/images/grenzo-card.jpg";
const cardName = "Grenzo, Dungeon Warden";

const styles = {
    card: {
        background: "#E1C932"
    },
    resourcePart: {
        color: "black",
        textAlign: "center",
        background: "#E1C932",
        fontFamily: "'Special Elite', cursive"

    },
    cardBody: {
        height: "100%",
        background: "#FAF9F9"
    },
    cardOfDay: {
        fontFamily: "'Special Elite', cursive"
    }
}

const RowOne = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <img className="card-img-top" src={picSrc} alt="CoD"></img>
                        <div className="card-body" style={styles.card}>
                            <h5 className="card-text text-center">{cardName}</h5>
                            <p style={styles.cardOfDay} className="card-text text-center">Card of the Day</p>
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
                                            <a href="https://www.youtube.com/channel/UCLsiaNUb42gRAP7ewbJ0ecQ" className="link">The Command Zone</a>
                                        </li>
                                        <li>
                                            <a href="https://edhrec.com/" className="link">EDHrec</a>
                                        </li>
                                        <li>
                                            <a href="https://tappedout.net/" className="link">Tapped Out</a>
                                        </li>
                                        <li>
                                            <a href="http://manabasecrafter.com/" className="link">Mana Crafter</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UC-w5MNByr4SNy3z2232sj0g" className="link">Commander's Quarters</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/playlist?list=PLs3sXClTNo-rNYnX9iw4kP7oi_7JGcaTM" className="link">Lab Maniacs</a>
                                        </li>
                                        <li>
                                            <a href="http://www.smileylich.com/mtg/magocracy/Magocracy_G1.html" className="link">EDH Commander Card Reference</a>
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
                                            <a href="https://www.youtube.com/playlist?list=PLyLzs6vB3Xk75kjIm45DQLrR8oT63_OvD" className="link">Game Knights</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSNNRrpJjhf1WrwwuZqUcg0K" className="link">Commander VS</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UCYwsoqRNmyfM-E7tyQD4buw" className="link">Quest for the Janklord</a>
                                        </li>
                                        <li>
                                            <a href="https://www.mtggoldfish.com/series/commander-clash" className="link">Commander Clash</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/playlist?list=PLs3sXClTNo-oCl0wLWW5ULWSKVzDxqJCA" className="link">Lab Maniacs</a>
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
                                            <a href="https://www.youtube.com/playlist?list=PLyLzs6vB3Xk75kjIm45DQLrR8oT63_OvD" className="link">TCGPlayer</a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/playlist?list=PL5d1KNNFArSNNRrpJjhf1WrwwuZqUcg0K" className="link">Card Kingdom</a>
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