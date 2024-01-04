import React from 'react'
import "./Main_Page.css";
import Header from './Header';
import TrendingBar from './Trending_Bar';
import Graphs from './Graphs';
import DashboardStats from './DashboardStats';
function Main_Page({ isNavOpen, Toggle }) {
    return (
        <div className={"" + (isNavOpen ? "main_page_full" : "main_page_half")}>
            <Header isNavOpen={isNavOpen} Toggle={Toggle} />
            <TrendingBar/>
            <Graphs/>
            <DashboardStats/>
            <img src="https://i.ibb.co/qdGRG3H/Screenshot-2024-01-05-030544.png" alt="Screenshot-2024-01-05-030544" border="0"></img>
        </div>
    )
}

export default Main_Page