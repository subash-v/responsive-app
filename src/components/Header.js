import React, { Component } from "react";
import styles from "./Header.module.css";
import DesktopOnly from "./DesktopOnly";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
          <DesktopOnly>
        <div className={styles.base}>
          <div className={styles.headerWrapper}>
            <div className={styles.getAppContainer}>
              
              <div className={styles.navText}>
              <div className={styles.icon} />Get the App</div>
            </div>
            <div className={styles.nav}>
              <div className={styles.navText}>
                <div className={styles.icon} />
                Order Food
              </div>
              <div className={styles.navText}>
                <div className={styles.icon} />
                Book a table
              </div>
              <div className={styles.navText}>
                <div className={styles.icon} />
                Zomato
              </div>
            </div>
          </div>
        </div>
        </DesktopOnly>
      </React.Fragment>
    );
  }
}
