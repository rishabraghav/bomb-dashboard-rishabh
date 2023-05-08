import React from "react";
import useWithdrawFromBomb from "../../../hooks/useWithdrawFromBomb";
import useStakedBombBalance from '../../../hooks/useStakedBombBalance';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';


const BombFarms = () => {
    const {onWithdraw} = useWithdrawFromBomb();
    const stackedBomb = useStakedBombBalance();
    const tvl = useTotalValueLocked();

    const handleWithdrawBomb = () => {
        const amount = getDisplayBalance(stackedBomb);
        onWithdraw(amount);
    }
    return (
        <div className="BombFarms marginForAll">
            <div className="headings">
                <p className="headlines">Bomb Farms</p>
                <div style={{display: "flex", justifyContent:"space-between", flexDirection:"row"}}>
                        <p className="headlines" style={{fontSize: "smaller"}}>Stake BSHARE and earn BOMB every epoch</p>
                        <button style={{display: "flex", justifyContent: "center", alignItems:"center"}} className="button">Claim All <img style={{height:"18px", width:"18px"}} alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  /></button>
                </div>
            </div>
            <div style={{display:"flex"}} className="bomb-btcb">
                <img style={{height: "48px", width: "48px"}} alt="img" src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <div className="boardroomHeadings" style={{width:"550px"}}>
                    <p className="headlines">BOMB-BTCB <span className="recommended">Recommended</span></p>
                    <div style={{display: "flex", justifyContent:"space-between", flexDirection:"row"}}>
               
                        <p style={{color:"white"}}>TVL: ${tvl.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <hr />

            <div className="boardroomStatsAndFunctions">
                <div className="boardroomStats">
                    <div className="boardroomDailyReturns">
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>Daily Returns</p>
                        <p style={{color:"white", fontSize:"25px", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>2%</p>
                    </div>
                    <div className="boardroomYourStake">
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>Your Stake:</p>
                        <p style={{color:"white", fontSize:"20px", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}><img style={{height:"20px", width:"20px"}} alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  />{123}</p>
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>≈ ${123}</p>
                    </div>
                    <div className="boardroomEarned">
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>Earned:</p>
                        <p style={{color:"white", fontSize:"20px", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}><img style={{height:"20px", width:"20px"}} alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/5926/6a82/57bf55ba3b3a7b02695860f5a186a8cf?Expires=1684108800&Signature=C3SkMgiyPik-KYSpKu~C9GQiEsz9u~vhIDWI4zRTWUzVSI2tx0-63mk25nTXnQTN0XMyzbvsSzZgIppDgwG4emWBP4-hrvYyAC9AWYTXQMxM9p5PP5xuGybdfeGH8DCjVNaij7OJcx~~Ry16d~6hanRag~6nbgIp47f4AYzbNSsAtMwNmgEuaq-oqtAgL4LSCoAC1Gw-ZdBGU4X5z9zR-vPe7Q9BNQjDc9JLl-1v5nmqLpa1n4oagx9CCIsEICyWJRATmpSCEBNivnkSk4DO~6kbiGb7ZAB9Hui9dunRF-dlGN9AGIin4-OhXrl9Ot4O34HjbjWXvXBAnl~pYhC2dA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  />{'123'}</p>
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>≈ ${132}</p>
                    </div>
                </div>
                <div className="boardroomFunctions">
                    <div>
                        <button className="button boardroomDeposit" >Deposit <img style={{height:"18px", width:"18px", backgroundColor:"#6C9BCF", marginLeft:"3px"}} alt="img" src="https://img.icons8.com/?size=512&id=100000&format=png"/></button>

                        <button className="button boardroomWithdraw" onClick={handleWithdrawBomb}>Withdraw <img style={{height:"20px", width:"20px", backgroundColor:"#6C9BCF", marginLeft:"3px"}} alt="img" src="https://img.icons8.com/?size=512&id=102673&format=png"/></button>

                    </div>
                    <button style={{display: "flex", justifyContent: "center", alignItems:"center"}} className="button boardroomClaim" >Claim Rewards <img style={{height:"18px", width:"18px"}} alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  /></button>
                </div>
                
            </div>
            <hr style={{width: "100%", border: "0.5px solid rgba(0, 173, 232, 1)"}}/>
            <div style={{display:"flex"}} className="bshare-bnb">
                <img style={{height: "48px", width: "48px"}} alt="img" src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <div className="boardroomHeadings" style={{width:"550px"}}>
                    <p className="headlines">BSHARE-BNB <span className="recommended">Recommended</span></p>
                    <div style={{display: "flex", justifyContent:"space-between", flexDirection:"row"}}>

                        <p style={{color:"white"}}>TVL: ${tvl.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="boardroomStatsAndFunctions">
                <div className="boardroomStats">
                    <div className="boardroomDailyReturns">
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>Daily Returns</p>
                        <p style={{color:"white", fontSize:"25px", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>2%</p>
                    </div>
                    <div className="boardroomYourStake">
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>Your Stake:</p>
                        <p style={{color:"white", fontSize:"20px", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}><img style={{height:"20px", width:"20px"}} alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  />{213}</p>
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>≈ ${1234}</p>
                    </div>
                    <div className="boardroomEarned">
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>Earned:</p>
                        <p style={{color:"white", fontSize:"20px", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}><img style={{height:"20px", width:"20px"}} alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/5926/6a82/57bf55ba3b3a7b02695860f5a186a8cf?Expires=1684108800&Signature=C3SkMgiyPik-KYSpKu~C9GQiEsz9u~vhIDWI4zRTWUzVSI2tx0-63mk25nTXnQTN0XMyzbvsSzZgIppDgwG4emWBP4-hrvYyAC9AWYTXQMxM9p5PP5xuGybdfeGH8DCjVNaij7OJcx~~Ry16d~6hanRag~6nbgIp47f4AYzbNSsAtMwNmgEuaq-oqtAgL4LSCoAC1Gw-ZdBGU4X5z9zR-vPe7Q9BNQjDc9JLl-1v5nmqLpa1n4oagx9CCIsEICyWJRATmpSCEBNivnkSk4DO~6kbiGb7ZAB9Hui9dunRF-dlGN9AGIin4-OhXrl9Ot4O34HjbjWXvXBAnl~pYhC2dA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  />{123}</p>
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>≈ ${123}</p>
                    </div>
                </div>
                <div className="boardroomFunctions">
                    <div>
                        <button className="button boardroomDeposit" >Deposit <img style={{height:"18px", width:"18px", backgroundColor:"#6C9BCF", marginLeft:"3px"}} alt="img" src="https://img.icons8.com/?size=512&id=100000&format=png"/></button>

                        <button className="button boardroomWithdraw" onClick={handleWithdrawBomb}>Withdraw <img style={{height:"20px", width:"20px", backgroundColor:"#6C9BCF", marginLeft:"3px"}} alt="img" src="https://img.icons8.com/?size=512&id=102673&format=png"/></button>

                    </div>
                    <button style={{display: "flex", justifyContent: "center", alignItems:"center"}} className="button boardroomClaim" >Claim Rewards <img style={{height:"18px", width:"18px"}} alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  /></button>
                </div>
                
            </div>
        </div>
    );
}

export default BombFarms;