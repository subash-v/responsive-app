import React, { Component } from 'react'
import styles  from './NoMatch.module.css';

export default class NoMatch extends Component {
    render() {
        return (
            <div className={styles.base}>
                <div className={styles.container}>
              <div className={styles.errorCode}>404 </div>  
              <div className={styles.errorText}>NOT FOUND</div>
              </div>
            </div>

        )
    }
}
