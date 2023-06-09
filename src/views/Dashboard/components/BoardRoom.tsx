import React from "react";
import useWithdrawFromBoardroom from '../../../hooks/useWithdrawFromBoardroom';
// import {Button} from '@material-ui/core';
// import useRedeemOnBoardroom from '../../../hooks/useRedeemOnBoardroom';
import useHarvestFromBoardroom from '../../../hooks/useHarvestFromBoardroom';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useStakeToBoardroom from '../../../hooks/useStakeToBoardroom';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';
import useEarningsOnBoardroom from '../../../hooks/useEarningsOnBoardroom';

// import { useWallet } from 'use-wallet';

const BoardRoom = () => {
    const {onWithdraw} = useWithdrawFromBoardroom();
    // const {onRedeem} = useRedeemOnBoardroom();
    // const { account } = useWallet();
    const {onReward} = useHarvestFromBoardroom();
    const stakedBalanceOnBoardroom = useStakedBalanceOnBoardroom();
    const {onStake} = useStakeToBoardroom();
    const totalStakedOnBoardroom= useTotalStakedOnBoardroom();
    const tvl = useTotalValueLocked();
    const earned = useEarningsOnBoardroom();

    const handleWithdrawClick = () => {
        const ammount = getDisplayBalance(stakedBalanceOnBoardroom);
        onWithdraw(ammount);
    };
    const handleDepositClick = () => {
        
        const amount = prompt("Enter an amount");
        onStake(amount);
    }
    return (
        <div className="BoardRoom marginForAll">
            <div style={{display: "flex", flexDirection: "row", alignItems:"center"}} >
                <img style={{height: "48px", width: "48px"}} alt="img" src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <div className="boardroomHeadings" style={{width:"550px"}}>
                    <p className="headlines">BoardRoom <span className="recommended">Recommended</span></p>
                    <div style={{display: "flex", justifyContent:"space-between", flexDirection:"row"}}>
                        <p className="headlines" style={{fontSize: "smaller"}}>Stake BSHARE and earn BOMB every epoch</p>
                        <p style={{color:"white"}}>TVL: ${tvl.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div style={{width:"600px", padding: "0 2px 0 2px", margin:"0 2px 0 2px"}}><p style={{float: "right", color:"white", padding:"1px", margin:"1px", fontSize:"15px", display: "flex", justifyContent: "center", alignItems:"center"}}>Total Staked:<img style={{height:"18px", width:"18px"}} alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  /> {Number(getDisplayBalance(totalStakedOnBoardroom)).toFixed(2)} </p></div>
            <div className="boardroomStatsAndFunctions">
                <div className="boardroomStats">
                    <div className="boardroomDailyReturns">
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>Daily Returns</p>
                        <p style={{color:"white", fontSize:"25px", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>2%</p>
                    </div>
                    <div className="boardroomYourStake">
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>Your Stake:</p>
                        <p style={{color:"white", fontSize:"20px", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}><img style={{height:"20px", width:"20px"}} alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  />{Number(stakedBalanceOnBoardroom)}</p>
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>≈ ${getDisplayBalance(stakedBalanceOnBoardroom)}</p>
                    </div>
                    <div className="boardroomEarned">
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>Earned:</p>
                        <p style={{color:"white", fontSize:"20px", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}><img style={{height:"20px", width:"20px"}} alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/5926/6a82/57bf55ba3b3a7b02695860f5a186a8cf?Expires=1684108800&Signature=C3SkMgiyPik-KYSpKu~C9GQiEsz9u~vhIDWI4zRTWUzVSI2tx0-63mk25nTXnQTN0XMyzbvsSzZgIppDgwG4emWBP4-hrvYyAC9AWYTXQMxM9p5PP5xuGybdfeGH8DCjVNaij7OJcx~~Ry16d~6hanRag~6nbgIp47f4AYzbNSsAtMwNmgEuaq-oqtAgL4LSCoAC1Gw-ZdBGU4X5z9zR-vPe7Q9BNQjDc9JLl-1v5nmqLpa1n4oagx9CCIsEICyWJRATmpSCEBNivnkSk4DO~6kbiGb7ZAB9Hui9dunRF-dlGN9AGIin4-OhXrl9Ot4O34HjbjWXvXBAnl~pYhC2dA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  />{Number(earned)}</p>
                        <p style={{color:"white", padding: "1px 2px 1px 2px", margin:"1px 2px 1px 2px"}}>≈ ${getDisplayBalance(earned)}</p>
                    </div>
                </div>
                <div className="boardroomFunctions">
                    <div>
                        <button className="button boardroomDeposit" onClick={handleDepositClick}>Deposit <img style={{height:"18px", width:"18px", backgroundColor:"#6C9BCF", marginLeft:"3px"}} alt="img" src="https://img.icons8.com/?size=512&id=100000&format=png"/></button>

                        <button className="button boardroomWithdraw" onClick={handleWithdrawClick}>Withdraw <img style={{height:"20px", width:"20px", backgroundColor:"#6C9BCF", marginLeft:"3px"}} alt="img" src="https://img.icons8.com/?size=512&id=102673&format=png"/></button>

                    </div>
                    <button style={{display: "flex", justifyContent: "center", alignItems:"center"}} className="button boardroomClaim" onClick={onReward}>Claim Rewards <img style={{height:"18px", width:"18px"}} alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  /></button>
                </div>
                
            </div>
            
        </div>
    );
}

export default BoardRoom;

// Unable to stake 1000 BSHARE to the boardroom
// you're using old boardroom. please withdraw and deposit the BSHARE again.