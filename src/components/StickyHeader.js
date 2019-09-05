import React, { Component } from 'react'
import styles from "./StickyHeader.module.css";
export default class StickyHeader extends Component {
    render() {
        return (
            <div className={styles.base}>
            <div className={styles.loginContainer}>
              <div className={styles.loginButton}>Log in</div>
              <div className={styles.sigupButton}>
                <div className={styles.buttonText}>Create an account</div>
              </div>
            </div>
          </div>
        )
    }
}
