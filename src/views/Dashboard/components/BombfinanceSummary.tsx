import React from "react";
import "../styles.css";
import useCurrentEpoch from '../../../hooks/useCurrentEpoch';
import moment from 'moment';
import useTreasuryAllocationTimes from '../../../hooks/useTreasuryAllocationTimes';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';
import useCashPriceInLastTWAP from '../../../hooks/useCashPriceInLastTWAP';
import useCashPriceInEstimatedTWAP from '../../../hooks/useCashPriceInEstimatedTWAP';
import ProgressCountdown from '../../Boardroom/components/ProgressCountdown';
import useBombStats from '../../../hooks/useBombStats';
import useBondStats from '../../../hooks/useBondStats';
import usebShareStats from '../../../hooks/usebShareStats';


const BombFinanceSummary = () => {
    const currentEpoch = useCurrentEpoch();
    const tvl = useTotalValueLocked();
    const prevCashStat = useCashPriceInLastTWAP();
    const bombStats = useBombStats();
    const bondStats = useBondStats();
    const cashStat = useCashPriceInEstimatedTWAP();
    const bshareStats = usebShareStats();

    const { to } = useTreasuryAllocationTimes();
    const lastTWAP = React.useMemo(() => (prevCashStat? Number(prevCashStat) : null), [prevCashStat]);
    const liveTWAP = React.useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);
    const usdToBtcRate = 0.000032; // hardcoded exchange rate
    // const usdAmount = 100; // amount in USD to convert
    // const btcAmount = usdAmount * usdToBtcRate;  // this approach is not recommended for production use as exchange rates can fluctuate rapidly and may become outdated quickly.




    return (
        <div className="BombFinanceSummary marginForAll">
            <div className="BombFinanceSummaryHeading">
                <p className="headlines">Bomb Finance Summary</p>
            </div>
            <hr />
            <div className="BombFinanceSummaryContents">
                <div className="BombFinanceSummaryContentsLEFT">
                    <div className="supplies rows">
                        <p className="currentSupply summaryData">Current Supply</p>
                        <p className="totalSupply summaryData">Total Supply</p>
                        <p className="price summaryData">Price</p>
                    </div>
                    <hr />
                    <div className="bombPrice rows">
                        <p style={{display: "flex", alignItems: "center"}} className="bombstat"><img className="icons" alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/5926/6a82/57bf55ba3b3a7b02695860f5a186a8cf?Expires=1684108800&Signature=C3SkMgiyPik-KYSpKu~C9GQiEsz9u~vhIDWI4zRTWUzVSI2tx0-63mk25nTXnQTN0XMyzbvsSzZgIppDgwG4emWBP4-hrvYyAC9AWYTXQMxM9p5PP5xuGybdfeGH8DCjVNaij7OJcx~~Ry16d~6hanRag~6nbgIp47f4AYzbNSsAtMwNmgEuaq-oqtAgL4LSCoAC1Gw-ZdBGU4X5z9zR-vPe7Q9BNQjDc9JLl-1v5nmqLpa1n4oagx9CCIsEICyWJRATmpSCEBNivnkSk4DO~6kbiGb7ZAB9Hui9dunRF-dlGN9AGIin4-OhXrl9Ot4O34HjbjWXvXBAnl~pYhC2dA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  />$BOMB</p>
                        <p className="currentSupplyBomb summaryData">{bombStats? bombStats.circulatingSupply : "0"}</p>
                        <p className="totalSupplyBomb summaryData">{bombStats? bombStats.totalSupply : "0"}</p>
                        <div className="summaryData">
                            <p className="bombDollars">${bombStats? bombStats.priceInDollars : "0"}</p>
                            <p className="bombBTC">{bombStats? (Number(bombStats.priceInDollars) * usdToBtcRate).toFixed(8) : "0"}BTC</p>
                        </div>
                        
                    </div>
                    <hr />
                    <div className="bsharePrice rows">
                        <p style={{display: "flex", alignItems: "center"}}><img className="icons" alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  />$BSHARE</p>
                        <p className="summaryData">{bshareStats? bshareStats.circulatingSupply : "0"}</p>
                        <p className="summaryData">{bshareStats? bshareStats.totalSupply : "0"}</p>
                        <div className="summaryData">
                            <p>${bshareStats? bshareStats.priceInDollars : "0"}</p>
                            <p>{bshareStats? (Number(bshareStats.priceInDollars) * usdToBtcRate).toFixed(8) : "0"}BTC</p>
                        </div>
                    </div>
                    <hr />
                    <div className="bbondPrice rows">
                        <p style={{display: "flex", alignItems: "center"}}><img className="icons" alt="img" src="https://s3-alpha-sig.figma.com/img/6f3d/b4ce/b810e96028e755fe33c9297e14206ea0?Expires=1684108800&Signature=EcDOzvWUY~NSUnUFnDWXjxX5ZLTGDFcYAV64Dm8pFwzU9AuNwABUZQ4lbe7kzO5Grwmqksve5Df1-~Wx5TWe0LLlwJSiPHNwNC4JLqDGiH6rW~MOozX~vh3YSFDjE5KiXlA3j7oLD0qr1cpJAHiV2GfAsmQNP9RM~FRmYtQwivFMqo8QK-Ft-sPNE3z1ThvXAW2VyTDwKugfO0bkfN2KgY2lCboSEivfOkJ5FPSUFh8uXCfNt0EQJ1viToFA2qNhWMNw7F6YKupF2ArNwPDWOB9d9Lo-tFPuJ82yPNLLr6dUxo02tWh-3enCD~hPg54-IHcVEudrZNNJiZY9ceaYMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />$BBOND</p>
                        <p className="summaryData" >{bondStats? bondStats.circulatingSupply : "0"}</p>
                        <p className="summaryData">{bondStats? bondStats.totalSupply : "0"}</p>
                        <div className="summaryData">
                            <p>${bondStats? bondStats.priceInDollars : "0"}</p>
                            <p>{bondStats? (Number(bondStats.priceInDollars) * usdToBtcRate).toFixed(8) : "0"}BTC</p>
                        </div>
                        {/* <img className="icons" alt="img" src="https://drive.google.com/file/d/1MspRPYyIjrTI0JukNqJFTWI2ldkv73lc/view?usp=share_link" /> */}
                    </div>
            
                    <hr />
                </div>
                <div className="BombFinanceSummaryContentsRIGHT">
                    <p className="currentEpoch">Current Epoch</p>
                    <p className="currentEpoch" style={{fontSize: "30px", fontWeight: "bold"}}>{Number(currentEpoch)}</p>
                    <hr />
                    <p className="currentEpoch" style={{fontSize: "30px", fontWeight: "bold"}}>
                    <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
                    </p>
                    <p className="currentEpoch">Next Epoch in</p>
                    <hr />
                    <p className="currentEpoch" style={{fontSize: "10px", fontWeight: "lighter"}}>Live TWAP: <span>{liveTWAP}</span></p>
                    <p className="currentEpoch" style={{fontSize: "10px", fontWeight: "lighter"}}>TVL: <span> ${tvl}</span></p> 
                    <p className="currentEpoch" style={{fontSize: "10px", fontWeight: "lighter"}}>Last Epoch TWAP: <span> {lastTWAP}</span></p>
                </div>
            </div>
        </div>
    );
}

export default BombFinanceSummary;