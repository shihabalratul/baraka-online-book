import React from "react";
import styles from "../assets/css/Footer.module.css";

export default function Footer() {
    return (
        <div>
            <div className={styles.footerMain}>
                <hr />
                <div>
                    <h6>This System is developed by Baraka SoftNix.</h6>

                    <h6>
                        আমাদের ওয়েবসাইট ভিজিট করুন{" "}
                        <a href="#"> barakasoftnix.com.bd</a>
                    </h6>
                </div>
                {/* /////////////////////////////////////////////////////// */}
                <div>
                    <ul>
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Link 3</a>
                        </li>
                        <li>
                            <a href="#">Link 4</a>
                        </li>
                    </ul>
                </div>
                {/* /////////////////////////////////////////////////////////////// */}
                <div>
                    <ul>
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Link 3</a>
                        </li>
                        <li>
                            <a href="#">Link 4</a>
                        </li>
                    </ul>
                </div>
                {/* ////////////////////////////////////////////////////// */}
                <div className={styles.footerIcon}>
                    <a href="#">
                        <i class="fab fa-2x fa-facebook text-white"> </i>
                    </a>
                    <a href="#">
                        <i class="fab fa-2x fa-youtube text-white"></i>
                    </a>
                    <a href="#">
                        <i class="fas fa-2x fa-envelope text-white"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-2x fa-instagram text-white"></i>
                    </a>
                </div>
                <hr />
            </div>
            <div>
                <h6 className="text-center">© 2020-2021 Copyright</h6>
            </div>
        </div>
    );
}
