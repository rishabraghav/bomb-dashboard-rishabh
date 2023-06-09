import React from "react";
import BombFinanceSummary from "./components/BombfinanceSummary";
import LatestNews from "./components/LatestNews";
import InvestNow from "./components/InvestNow";
import BombFarms from "./components/BombFarms";
import Bonds from "./components/Bonds";
import './styles.css';
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/background.jpg';
import BoardRoom from "./components/BoardRoom";
// import Nav from '../../components/Nav';
// import Footer from '../../components/Footer';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const Dashboard = () => {
    return (  
        <div className="dashboard">
        {/* <Nav /> */}
        <BackgroundImage />
        <h1 className="dash"> dashboard</h1>
        <BombFinanceSummary />
        <div className="investAndLatestNews">
            <div className="investANDboardroom">
                <InvestNow />
                <BoardRoom />
            </div>
            <LatestNews />
        </div>
        <BombFarms />
        <Bonds />
        </div>

    );
    
};

export default Dashboard;