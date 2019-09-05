import React, { Component } from "react";
import styles from "./Banner.module.css";
import StickyHeader from "./StickyHeader";
import Icon from "./Icon";
import SearchIcon from "./img/searchRed.svg";
import Input from "./Input";
import DesktopOnly from "./DesktopOnly";
export default class Banner extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.bannerWrapper}>
          <StickyHeader />
          <div className={styles.logoHolder}>
            <div className={styles.logo}></div>
          </div>

          <div className={styles.titleHolder}>
            <div className={styles.title}>
              Find the best restaurants, cafés, and bars in Bengaluru{" "}
            </div>
          </div>
       
          <div className={styles.searchContainer}>
            <div className={styles.searchBase}>
              <div className={styles.searchIconHolder}>
                <Icon image={SearchIcon} size={16} />
              </div>
              <div className={styles.input}>
                <Input
                  placeholder="What are you looking for?"
                  textStyle={{ fontSize: 14 }}
                  height={30}
                  type="search"
                  borderBottom={"0px solid #212121"}
                  border={"0px solid #212121"}
                />
              </div>
            </div>
            <div className={styles.buttonHolder}>
              <div className={styles.buttonText}>SEARCH</div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
