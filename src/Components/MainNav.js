import React from "react";

import styles from "../assets/css/MainNav.module.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function MainNav() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {/* ----------------------- logo----------------------------------- */}
                    <Navbar.Brand href="#home">
                        <a href="#sa">
                            <img src="../images/Navbar/best1.png" />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* ----------------------- 1st Option----------------------------------- */}
                            <Nav.Link href="#features">বারাকা</Nav.Link>
                            {/* <Nav.Link href="#pricing">বিষয়সমূহ</Nav.Link> */}
                            {/* ----------------------- 1st Dropdown----------------------------------- */}
                            <NavDropdown
                                title="বিষয়ভিত্তিক"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    ইসলামিক
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.2">
                                    রাজনৈতিক
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    সামাজিক
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.4">
                                    ব্যাক্তিগত
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.4">
                                    রাষ্ট্রীয়
                                </NavDropdown.Item>

                                <NavDropdown
                                    className={styles.customDropDown}
                                    title="সমস্যা "
                                    id="collasible-nav-dropdown"
                                >
                                    <div className={styles.customDropDownItems}>
                                        <NavDropdown.Item href="#action/3.১">
                                            ব্যাক্তিগত সমস্যা
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.১">
                                            সামাজিক সমস্যা
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.১">
                                            এলাকাভিত্তিক সমস্যা
                                        </NavDropdown.Item>
                                    </div>
                                </NavDropdown>

                                <NavDropdown
                                    // className={styles.customDropDown}
                                    title="সমাধান "
                                    id="collasible-nav-dropdown"
                                >
                                    <div
                                    // className={styles.customDropDownItems}
                                    >
                                        <NavDropdown.Item href="#action/3.১">
                                            সাধারন
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.১">
                                            মধ্যম
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.১">
                                            সিরিয়াস
                                        </NavDropdown.Item>
                                    </div>
                                </NavDropdown>

                                <NavDropdown.Item href="#action/3.4">
                                    অন্যান্য
                                </NavDropdown.Item>
                            </NavDropdown>
                            {/* ----------------------- 2nd Option----------------------------------- */}

                            <Nav.Link href="#pricing">হয়ে উঠুন লেখক</Nav.Link>

                            {/* ----------------------- 2nd Dropdown----------------------------------- */}
                            <NavDropdown
                                title="কাস্টমাইজেশন "
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    ভাষা
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    ডার্কমুড
                                </NavDropdown.Item>
                            </NavDropdown>
                            {/* ----------------------- 3rd Dropdown----------------------------------- */}
                            <NavDropdown
                                title="মতামত জানান"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    অভিযোগ
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    পরামর্শ দিন
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    আপনার জিজ্ঞাসা
                                </NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                            </NavDropdown>
                            {/* ----------------------- 4th Dropdown----------------------------------- */}
                            <NavDropdown
                                title="লগ ইন করুন"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    ইউজার
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    এডমিন
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    সাইন আপ করুন
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}