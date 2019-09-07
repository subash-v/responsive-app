import React from 'react'
import styles from'./Modal.module.css'

 export const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? styles.displayBlock :  styles.displayNone;
  
    return (
      <div className={showHideClassName}>
        <div className={styles.modalMain}>
          {children}
          <div  className={styles.close} onClick={handleClose}>X</div>
        </div>
      </div>
    );
  };