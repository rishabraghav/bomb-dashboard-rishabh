import React from "react";
import useWithdrawFromBoardroom from '../../../hooks/useWithdrawFromBoardroom';
import {Button} from '@material-ui/core';
// import useRedeemOnBoardroom from '../../../hooks/useRedeemOnBoardroom';
import useHarvestFromBoardroom from '../../../hooks/useHarvestFromBoardroom';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';

const BoardRoom = () => {
    const {onWithdraw} = useWithdrawFromBoardroom();
    // const {onRedeem} = useRedeemOnBoardroom();
    const {onReward} = useHarvestFromBoardroom();
    const stakedBalanceOnBoardroom = Number(useStakedBalanceOnBoardroom());

    const handleWithdrawClick = () => {
        const ammount = String(stakedBalanceOnBoardroom);
        onWithdraw(ammount);
    };
    return (
        <div className="BoardRoom marginForAll">
            <div style={{display: "flex", flexDirection: "row", alignItems:"center"}} >
                <img style={{height: "48px", width: "48px"}} alt="img" src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <div className="boardroomHeadings">
                    <p className="headlines">BoardRoom <span className="recommended">Recommended</span></p>
                    <p className="headlines" style={{fontSize: "smaller"}}>Stake BSHARE and earn BOMB every epoch</p>
                </div>
            </div>
            <hr />
            <div className="boardroomStatsAndFunctions">
                <div className="boardroomStats">
                    <h1>STATS</h1>
                </div>
                <div className="boardroomFunctions">
                    <Button className="boardroomDeposit">Deposit</Button>
                    <Button className="boardroomWithdraw" onClick={handleWithdrawClick}>Withdraw</Button>
                    <Button className="boardroomClaim" onClick={onReward}>Claim</Button>
                </div>
                
            </div>
            
        </div>
    );
}

export default BoardRoom;