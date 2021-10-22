import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../assets/css/SingleForm.module.css";

export default function SingleForm() {
    const searchInput = useRef(null);
    function handleFocus() {
        searchInput.current.focus();
    }
    return (
        <div>
            <div className={styles.form}>
                <Form>
                    <div>
                        <Form.Group controlId="formBasicEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control
                                ref={searchInput}
                                type="text"
                                placeholder="আপনার পছন্দের বইটি খুঁজুন এখানে..."
                            />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                        </Form.Group>
                    </div>
                    <div>
                        <Button
                            className={styles.button}
                            variant="primary"
                            type="submit"
                        >
                            <span className={styles.searchIcon}>
                                <i class="fas fa-search "></i>
                            </span>
                            Search
                        </Button>
                    </div>
                </Form>
                <Button
                    onClick={handleFocus}
                    className={styles.button2}
                    variant="primary"
                >
                    <span className={styles.searchIcon}>
                        <i class="fas fa-search "></i>
                    </span>
                </Button>
            </div>
        </div>
    );
}
