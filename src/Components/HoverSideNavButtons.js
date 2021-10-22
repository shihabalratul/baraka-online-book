import React from "react";
import styles from "../assets/css/HoverSideNavButtons.module.css";

export default function HoverSideNavButtons() {
    return (
        <div>
            <div className={styles.mySidenav}>
                <a href="#" className={styles.islamic}>
                    ইসলামিক{" "}
                    <span className={styles.islamicIcon}>
                        <i class="fas fa-quran"></i>
                    </span>
                </a>
                <a href="#" className={styles.political}>
                    রাজনৈতিক{" "}
                    <span className={styles.politicalIcon}>
                        <i class="fas fa-fist-raised"></i>
                    </span>
                </a>
                <a href="#" className={styles.national}>
                    জাতীয়{" "}
                    <span className={styles.nationalIcon}>
                        <i class="fas fa-handshake"></i>
                    </span>
                </a>
                <a href="#" className={styles.international}>
                    আন্তর্জাতিক{" "}
                    <span className={styles.internationalIcon}>
                        <i class="fas fa-globe-americas"></i>
                    </span>
                </a>
            </div>
        </div>
    );
}
