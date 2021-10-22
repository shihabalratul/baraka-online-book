import React from "react";
// import MainNav from "../Components/MainNav";
import Svg from "../Components/Svg";
import SingleForm from "../Components/SingleForm";
import HoverSideNavButtons from "../Components/HoverSideNavButtons";
import Cards from "../Components/Cards";
import "../assets/css/global.css";
import styles from "../CSSForPages/Baraka.module.css";
import VanillaTilt from "vanilla-tilt";

export default function Baraka() {
    return (
        <div className={styles.homeMain}>
            <div data-tilt>
                <Svg></Svg>
            </div>

            <SingleForm></SingleForm>
            <HoverSideNavButtons></HoverSideNavButtons>
            <div className="cardApp">
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </div>
            <div className={styles.section1}></div>
        </div>
    );
}
