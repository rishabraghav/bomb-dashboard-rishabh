import React from "react";



const BombFarms = () => {

    return (
        <div className="BombFarms marginForAll">
            <div className="BondFarms headings">
                <p className="headlines">BoardRoom</p>
                <div style={{display: "flex", justifyContent:"space-between", flexDirection:"row"}}>
                        <p className="headlines" style={{fontSize: "smaller"}}>Stake BSHARE and earn BOMB every epoch</p>
                        <button style={{display: "flex", justifyContent: "center", alignItems:"center"}} className="button">Claim Rewards <img style={{height:"18px", width:"18px"}} alt="bombimg"  src="https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1684108800&Signature=CIlhPZwuugGXFhdDHFxthynQV6kuCT9o3J9oOSBtBnEFBsVx7dlARHPg9GCRnYniOUwEbORcXUPG02g6mb4Z-LZc8R1POR9lbVgdNnxj3~o~9~80CvFAf6eF6TbnBKT-RqTkl8Iu8a5RPfKcIgIjfDTFACUlphyo-Eq1tX-AZX26RPS9eFClnrRvSZZry97DctNCN~nyu6~8ZtXlgc1WuEPmKF9M0fE5XrciIUNMDDAfKvZ2tKOtOkLpcyXS~jXRJJOEnKtCmA34y1MEhnuF3EHz4PNFhNGZBybNmc4NLlvO-PbratXyv1Qd9VmlnY0E1f3p5u1Zd712XXgZeCPYAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"  /></button>
                </div>
            </div>
            <div className="bomb-btcb">

            </div>
            <div className="bshare-bnb">
                
            </div>
        </div>
    );
}

export default BombFarms;