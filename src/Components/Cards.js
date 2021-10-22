import React from "react";
import best1 from "../images/Navbar/best_1.png";
import user1 from "../images/User/user1.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import styles from "../assets/css/Cards.module.css";
import { Tab, Tabs } from "react-bootstrap";

export default function Cards() {
    const [show, setShow] = React.useState(false);
    return (
        <div>
            <div className={styles.cardMain}>
                {" "}
                {/* height width e may be jhamela ase ..  */}
                <Card
                    className={styles.cardD}
                    style={{ width: "18rem", height: "25rem" }}
                >
                    <a href="#fdf" className={styles.cardLinkDesign}>
                        <Card.Img variant="top" src={best1} />
                    </a>
                    <Card.Body className={styles.cardBody}>
                        <a href="#fdf" className={styles.cardLinkDesign}>
                            <Card.Title>
                                মুক্তিযুদ্ধের সঠিক ইতিহাস ও বাংলাদেশ
                            </Card.Title>
                            <Card.Text>
                                <a className={styles.authorName} href="#author">
                                    Mohammad Sheakh{" "}
                                </a>
                                <span>
                                    <i class="fas fa-check-circle"></i>
                                </span>
                            </Card.Text>
                            <Card.Text>
                                <span>
                                    <i class="fas fa-user-friends"></i>
                                </span>
                                বই টি পড়েছে ৪০০ জন
                            </Card.Text>
                            <Card.Text>
                                <div className={styles.bookRatings}>
                                    {/* <i class="far fa-star-half"></i> */}
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>

                                    {/* <i class="fas fa-flag-checkered"></i> */}
                                </div>
                            </Card.Text>

                            <Card.Text>
                                <div className={styles.bookTags}>
                                    <a className={styles.bookTag} href="#desh">
                                        দেশ
                                    </a>
                                    <a className={styles.bookTag} href="#mukti">
                                        মুক্তিযুদ্ধ
                                    </a>
                                    <a
                                        className={styles.bookTag}
                                        href="#itihash"
                                    >
                                        ইতিহাস
                                    </a>
                                </div>
                            </Card.Text>
                        </a>

                        <Button className={styles.buttons3}>
                            <i class="fas fa-align-left"></i>
                        </Button>
                        <Button className={styles.buttons2}>
                            <i class="far fa-bookmark"></i>
                        </Button>
                        <Button
                            onClick={() => setShow(!show)}
                            variant="primary"
                            className={styles.buttons}
                        >
                            <i class="fas fa-location-arrow"></i>
                        </Button>
                        {/* <Button className={styles.buttons4}>
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </Button> */}
                    </Card.Body>
                </Card>
                <div className={styles.shortDetails}>
                    {show ? (
                        <div>
                            <Card
                                className={styles.shortDetailsCard}
                                style={{ width: "344px", height: "27rem" }}
                            >
                                {/* <Card.Header></Card.Header> */}
                                <Card.Body>
                                    <div>
                                        <Card.Title>
                                            মুক্তিযুদ্ধের সঠিক ইতিহাস ও বাংলাদেশ
                                        </Card.Title>
                                    </div>
                                    <div className={styles.shortDetailsAuthor}>
                                        <div>
                                            <Card.Text>
                                                <a
                                                    className={
                                                        styles.authorName
                                                    }
                                                    href="#author"
                                                >
                                                    Mohammad Sheakh{" "}
                                                </a>
                                                <span>
                                                    <i class="fas fa-check-circle"></i>
                                                </span>
                                            </Card.Text>
                                        </div>
                                        <div
                                            className={
                                                styles.shortDetailsUserImage
                                            }
                                        >
                                            <Image
                                                width="70"
                                                height="70"
                                                roundedCircle
                                                src={user1}
                                            />
                                        </div>
                                    </div>
                                    <Card.Text>
                                        <div className={styles.freePaidTags}>
                                            <a
                                                className={styles.freePaidTag}
                                                href="#desh"
                                            >
                                                Free
                                            </a>
                                            <a
                                                className={styles.freePaidTag}
                                                href="#desh"
                                            >
                                                <i class="fas fa-book-reader"></i>{" "}
                                                ৪০,০০০ জন
                                            </a>
                                        </div>
                                    </Card.Text>

                                    <Button
                                        onClick={() => setShow(!show)}
                                        variant="primary"
                                        className={
                                            styles.shortDetailsClosebutton
                                        }
                                    >
                                        <i class="fas fa-times"></i>
                                    </Button>

                                    <div>
                                        <Tabs
                                            defaultActiveKey="profile"
                                            id="uncontrolled-tab-example"
                                            className="mb-0"
                                        >
                                            <Tab eventKey="home" title="ছোটকথা">
                                                {" "}
                                                মহান মুক্তিযুদ্ধের সংগ্রামী
                                                ইতিহাস ও সেই সব দিনের রোমাঞ্চকর
                                                গল্প এই বই এর মূল বিষয় । আমার
                                                ছোট নানাভাই ছিলেন একজন
                                                মুক্তিযোদ্ধা ... তার মুখ নিঃসৃত
                                                কথা'ই এই বই এ তুলে ধরা হয়েছে
                                                সাবলিল ভাষায়। যশোর , খুলনা
                                                এলাকার ১৯৭১ সালের অবস্থা ও
                                                যুদ্ধের কৌশল, হানাদার বাহিনির
                                                বীভৎস অত্যাচার , এসবের মাঝে
                                                নিজেকে কল্পনা করতেই একবার হলেও
                                                এই বইটি আপনার পড়া উচিত 😀
                                            </Tab>
                                            <Tab
                                                eventKey="profile"
                                                title="লেখকের গল্প"
                                            >
                                                মোহাম্মদ বিন আঃ জলিল শেখ একজন
                                                ছাত্র, ওয়েব ডেভেলপার ... একই
                                                সাথে একজন ভীষন ENTHUSIAST একজন
                                                মানুষ সে বারাকা সফটনিক্স এর
                                                ফাউন্ডার ... এই কোম্পানির
                                                মাধ্যমে দেশ বিদেশে ওয়েব
                                                অ্যাপলিকেশন রিলেডেট সেবা প্রদান
                                                করে থাকেন ... তার ব্যাপারে আরো
                                                বিস্তারিত জানতে ভিজিট করতে পারেন
                                                🌐 fb.com/mohammadsheakh.mern/
                                            </Tab>
                                            <Tab
                                                eventKey="contact"
                                                title="কমেন্টস"
                                                // disabled
                                            ></Tab>
                                        </Tabs>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
