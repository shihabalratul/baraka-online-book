import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../CSSForPages/PublicComments.module.css";
import AccordionFAQ from "../Components/AccordionFAQ";
import Svg from "../Components/Svg";

export default function PublicComments() {
    return (
        <div>
            <div className={styles.complainBox1} id="complainBox">
                <div>
                    <div className={styles.title}>
                        <h1>কমপ্লেইন দিন</h1>
                    </div>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <div className={styles.giveSuggestionBox2} id="giveSuggestionBox">
                <div>
                    <div className={styles.title}>
                        <h1>সাজেশান বক্স</h1>
                    </div>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <div className={styles.askUs3} id="askUs">
                <div>
                    <div className={styles.title}>
                        <h1>আপনার জিজ্ঞাসা</h1>
                    </div>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ask Us</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <div
                className={styles.frequentlyAskingQuestion4}
                id="frequentlyAskingQuestion"
            >
                <Svg></Svg>
                <div className={styles.title}>
                    <h1>FAQ - Frequently Asking Question</h1>
                </div>
                <AccordionFAQ></AccordionFAQ>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,288L17.1,250.7C34.3,213,69,139,103,138.7C137.1,139,171,213,206,224C240,235,274,181,309,144C342.9,107,377,85,411,90.7C445.7,96,480,128,514,154.7C548.6,181,583,203,617,202.7C651.4,203,686,181,720,197.3C754.3,213,789,267,823,245.3C857.1,224,891,128,926,117.3C960,107,994,181,1029,192C1062.9,203,1097,149,1131,112C1165.7,75,1200,53,1234,90.7C1268.6,128,1303,224,1337,218.7C1371.4,213,1406,107,1423,53.3L1440,0L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
}
