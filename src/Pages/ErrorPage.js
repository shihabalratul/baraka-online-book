import React from "react";

import styles from "../CSSForPages/ErrorPage.module.css";

export default function ErrorPage() {
    return (
        <div>
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div class={styles.mainError}>
                    <hr />
                    <h1 class={styles.mainErrorText}>
                        Sorry ! You have No Permission to View this page !
                    </h1>
                    <hr />
                </div>
            </div>
        </div>
    );
}
