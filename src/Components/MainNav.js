/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import best1 from "../images/Navbar/best_1.png";
import styles from "../assets/css/MainNav.module.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Dropdown, Image, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

// import Offcanvas from "react-bootstrap/Offcanvas";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";

export default function MainNav() {
    return (
        <div>
            <div>
                {/* <marquee
                    className={styles.marquee}
                    behavior="scroll"
                    direction="left"
                >
                    ** একটি সুন্দর লেখাই খুলে দিতে পারে সম্ভাবনার নতুন দুয়ার,
                    লেখা আপনার সৃজনশীল মনকে আরো সৃজনশীল করে তুলবে, আপনার ভাবনারা
                    স্থান নিবে আপনারই পাঠকদের মনে ... তাই লিখুন ! সকল সম্ভাবনার
                    দুয়ারকে উন্মোচন করুন আপনার লেখা দিয়ে ! কলমের জবাব কলমে দিন
                    🔰 ** বারাকা বুকস এর সাথে আপনার যাত্রা সুন্দর হোক ❤ ! **
                </marquee> */}
            </div>

            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                // sticky="top"
                fixed="top"
            >
                <Container>
                    {/* ----------------------- logo----------------------------------- */}
                    <div className={styles.navbarImage}>
                        <Navbar.Brand href="/">
                            <Link to="/">
                                <Image width="50" height="50" src={best1} />
                            </Link>
                        </Navbar.Brand>
                    </div>
                    <div className={styles.navbarContent}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                {/* ----------------------- 1st Option----------------------------------- */}
                                <Nav.Link
                                    className={styles.nlink}
                                    as={Link}
                                    to="/"
                                >
                                    বারাকা
                                </Nav.Link>
                                {/* <Nav.Link href="#pricing">বিষয়সমূহ</Nav.Link> */}
                                {/* ----------------------- বিষয়ভিত্তিক Dropdown----------------------------------- */}

                                <NavDropdown
                                    title="বিষয়ভিত্তিক"
                                    id="collasible-nav-dropdown"
                                >
                                    <NavDropdown.Item to="#action/3.1">
                                        ইসলামিক
                                    </NavDropdown.Item>

                                    <NavDropdown.Item to="#action/3.2">
                                        রাজনৈতিক
                                    </NavDropdown.Item>
                                    <NavDropdown.Item to="#action/3.3">
                                        সামাজিক
                                    </NavDropdown.Item>
                                    <NavDropdown.Item to="#action/3.3">
                                        জাতীয়
                                    </NavDropdown.Item>
                                    <NavDropdown.Item to="#action/3.4">
                                        ব্যাক্তিগত
                                    </NavDropdown.Item>

                                    <NavDropdown.Item to="#action/3.4">
                                        রাষ্ট্রীয়
                                    </NavDropdown.Item>
                                    {/* ----------------------- বিষয়ভিত্তিক > সমস্যা Dropdown----------------------------------- */}
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="none shadow-none w-100 rounded-0 text-start"
                                            id="dropdown-basic"
                                            border="none"
                                            className={styles.customDropDown}
                                        >
                                            সমস্যা
                                        </Dropdown.Toggle>

                                        <div
                                            className={
                                                styles.customDropDownItems
                                            }
                                        >
                                            <Dropdown.Menu>
                                                <Dropdown.Item to="#/action-1">
                                                    ব্যাক্তিগত সমস্যা
                                                </Dropdown.Item>
                                                <Dropdown.Item to="#/action-2">
                                                    সামাজিক সমস্যা
                                                </Dropdown.Item>
                                                <Dropdown.Item to="#/action-3">
                                                    এলাকাভিত্তিক সমস্যা
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </div>
                                    </Dropdown>
                                    {/* ----------------------- বিষয়ভিত্তিক > সমাধান Dropdown----------------------------------- */}
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="none shadow-none w-100 rounded-1 text-start"
                                            id="dropdown-basic"
                                            border="none"
                                            className={styles.customDropDown}
                                        >
                                            সমাধান
                                        </Dropdown.Toggle>

                                        <div
                                            className={
                                                styles.customDropDownItems
                                            }
                                        >
                                            <Dropdown.Menu>
                                                <Dropdown.Item to="#/action-1">
                                                    সাধারন
                                                </Dropdown.Item>
                                                <Dropdown.Item to="#/action-2">
                                                    মধ্যম
                                                </Dropdown.Item>
                                                {/* <Dropdown.Item href="#/action-3">
                                                সিরিয়াস
                                            </Dropdown.Item> */}
                                                {/* ----------------------- বিষয়ভিত্তিক > সমাধান > সিরিয়াস Dropdown----------------------------------- */}
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="none shadow-none w-100 rounded-0 text-start"
                                                        id="dropdown-basic"
                                                        border="none"
                                                        className={
                                                            styles.customDropDown
                                                        }
                                                    >
                                                        সিরিয়াস
                                                    </Dropdown.Toggle>

                                                    <div
                                                        className={
                                                            styles.customDropDownItems
                                                        }
                                                    >
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item to="#/action-1">
                                                                জাতীয়
                                                            </Dropdown.Item>
                                                            <Dropdown.Item to="#/action-2">
                                                                আন্তর্জাতিক
                                                            </Dropdown.Item>
                                                            <Dropdown.Item to="#/action-3">
                                                                সামাজিক
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </div>
                                                </Dropdown>
                                            </Dropdown.Menu>
                                        </div>
                                    </Dropdown>

                                    <NavDropdown.Item to="#action/3.4">
                                        অন্যান্য
                                    </NavDropdown.Item>
                                </NavDropdown>
                                {/* ----------------------- 2nd Option----------------------------------- */}

                                <Nav.Link as={Link} to="/beAwriter">
                                    হয়ে উঠুন লেখক
                                </Nav.Link>

                                {/* ----------------------- 2nd Dropdown----------------------------------- */}
                                <NavDropdown
                                    title="কাস্টমাইজেশন "
                                    id="collasible-nav-dropdown"
                                >
                                    <NavDropdown.Item to="#action/3.1">
                                        ভাষা
                                    </NavDropdown.Item>
                                    <NavDropdown.Item to="#action/3.2">
                                        ডার্কমুড
                                    </NavDropdown.Item>
                                </NavDropdown>
                                {/* ----------------------- 3rd Dropdown----------------------------------- */}
                                <NavDropdown
                                    title="মতামত জানান"
                                    id="collasible-nav-dropdown"
                                >
                                    <NavDropdown.Item
                                        as={Link}
                                        to="/publicComments/#complainBox"

                                        // to={{
                                        //     pathname: "/publicComments",
                                        //     hash: "/complainBox",
                                        // }}
                                    >
                                        অভিযোগ
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        // as={Link}
                                        href="/publicComments/#giveSuggestionBox"
                                        // to={{
                                        //     pathname: "/publicComments",
                                        //     hash: "/giveSuggestionBox",
                                        // }}
                                    >
                                        পরামর্শ দিন
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        // as={Link}
                                        href="/publicComments/#askUs"

                                        // to={{
                                        //     pathname: "/publicComments",
                                        //     hash: "/askUs",
                                        // }}
                                    >
                                        আপনার জিজ্ঞাসা
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        // as={Link}
                                        href="/publicComments/#frequentlyAskingQuestion"

                                        // to={{
                                        //     pathname: "/publicComments",
                                        //     hash: "/askUs",
                                        // }}
                                    >
                                        FAQ
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                </NavDropdown>
                                {/* ----------------------- 4th Dropdown----------------------------------- */}
                                <NavDropdown
                                    title="লগ ইন করুন"
                                    id="collasible-nav-dropdown"
                                >
                                    <NavDropdown.Item to="#action/3.1">
                                        ইউজার
                                    </NavDropdown.Item>
                                    <NavDropdown.Item to="#action/3.2">
                                        এডমিন
                                    </NavDropdown.Item>
                                    <NavDropdown.Item to="#action/3.3">
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
                    </div>

                    {/* ///////////////////////////////////////////////////////////////////////////////// */}
                </Container>
            </Navbar>
        </div>
    );
}
