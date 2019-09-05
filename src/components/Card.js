import React, { Component } from 'react'
import styles from "./Card.module.css";
export default class Card extends Component {
    render() {
        return (
            <div className={styles.base}>
                      <div className={styles.imageHolder}>
                        <img
                          width="100%"
                          height="100%"
                          alt={"foodIcon"}
                          src={this.props.image}
                        />
                      </div>
                      <div className={styles.headingContainer}>
                        <div className={styles.headerText}>{this.props.header}</div>
                        <div className={styles.subHeaderText}>
                          {this.props.subtext}
                        </div>
                      </div>
                    </div>
        )
    }
}
