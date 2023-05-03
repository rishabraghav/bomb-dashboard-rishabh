import React from "react";
import "../styles.css";
import useCurrentEpoch from '../../../hooks/useCurrentEpoch';

const BombFinanceSummary = () => {
    const currentEpoch = useCurrentEpoch();
    return (
        <div className="BombFinanceSummary marginForAll">
            <div className="BombFinanceSummaryHeading">
                <h1>Bomb Finance Summary</h1>
                <hr />
            </div>
            <div className="BombFinanceSummaryContents">
                <div className="BombFinanceSummaryContentsLEFT">
                    
                </div>
                <div className="BombFinanceSummaryContentsRIGHT">
                    <p className="currentEpoch">Current Epoch</p>
                    <p className="currentEpoch" style={{fontSize: "30px", fontWeight: "bold"}}>{Number(currentEpoch)}</p>
                    <hr />
                    <p className="currentEpoch" style={{fontSize: "30px", fontWeight: "bold"}}>03:38:36</p>
                    <p className="currentEpoch">Next Epoch in</p>
                    <hr />
                    <p className="currentEpoch" style={{fontSize: "10px", fontWeight: "lighter"}}>Live TWAP: <span> 1.17</span></p>
                    <p className="currentEpoch" style={{fontSize: "10px", fontWeight: "lighter"}}>TVL: <span> $5,002,412</span></p> 
                    <p className="currentEpoch" style={{fontSize: "10px", fontWeight: "lighter"}}>Last Epoch TWAP: <span> 1.22</span></p>
                </div>
            </div>
        </div>
    );
}

export default BombFinanceSummary;