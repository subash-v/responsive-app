import React, { Component } from "react";
import styles from "./Home.module.css";
import Header from "./Header";
import Banner from "./Banner";
import Collection from "./Collection";

export default class Home extends Component {
  render() {
    return (
      <div className={styles.base}>
        <Header />
        <Banner/>
        <Collection/>
      </div>
    );
  }
}
