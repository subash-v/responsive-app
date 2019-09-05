import React, { Component } from "react";
import styles from "./Collection.module.css";
import collection from "./json/collectionData";
import Card from "./Card";
import Input from "./Input";
export default class Collection extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.container}>
          <div className={styles.collectionBase}>
            <div className={styles.header}>Collections</div>
            <div className={styles.subHeader}>
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Bengaluru, based on trends
            </div>
            <div className={styles.cards}>
              {collection &&
                collection.map((val, i) => {
                  return (
                    <Card
                      image={val.image}
                      header={val.header}
                      subtext={val.subtext}
                    />
                  );
                })}
            </div>
          </div>
          <div className={styles.orderOnlineBase}>
            <div className={styles.header}> Order Food Online</div>
            <div className={styles.subHeader}>
              Best restaurants delivering to your doorstep
            </div>
            <div className={styles.locationBase}>
              <div className={styles.locationHeading}>
                Enter your delivery location
              </div>
              <div className={styles.detectLocationBase}>
                <div className={styles.locationDetector}>
                  <Input
                    placeholder="Type delivery location here..."
                    textStyle={{ fontSize: 14 }}
                    height={30}
                    type="search"
                    borderBottom={"0px solid #212121"}
                    border={"0px solid #212121"}
                  />
                </div>
                <div className={styles.buttonHolder}>
                    <div className={styles.buttonText}>
                        Order Food Online!
                    </div>
                </div>
              </div>
              <div className={styles.info}>
             { "Use code ZOMATO to get up to 50% OFF. T&Cs apply."}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
