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
        <div className="w-100 d-flex">
           
                <Form className={styles.form}>
                    {/* /Removed form group as it is unnecessary when using single form item./ */}
                        
                            <Form.Control
                                className={styles.searchBar}
                                ref={searchInput}
                                type="search"
                                placeholder="আপনার পছন্দের বইটি খুঁজুন এখানে..."
                            />
                          
                    
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
        
    );
}
