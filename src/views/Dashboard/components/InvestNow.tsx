import React from "react";


const InvestNow = () => {
    return (
        <div className="InvestNow">
            <div className="ReadInvestmentStrategy">
                <p className="ReadInvestmentStrategyText">Read Investment Strategy {'>'} </p>
            </div>
            <div className="invest">
                <p className="investText">Invest Now</p>
            </div>
            <div className="chatAndRead">
                <p className="chatAndReadDocs"><img className="icons" alt="img" src="https://img.icons8.com/?size=512&id=86982&format=png"></img> Chat on Discord</p>
                <p className="chatAndReadDocs"><img className="icons" alt="img" src="https://img.icons8.com/?size=512&id=100417&format=png"></img>Read Docs</p>
            </div>
        </div>
    );
}

export default InvestNow;