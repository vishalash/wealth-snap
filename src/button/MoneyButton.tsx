import React, { useState } from "react";
import styles from './MoneyButton.module.css';

function Button(props: any) {
  const [clicked, setClicked] = useState(false);
  const [coinLanded, setCoinLanded] = useState(false);
  const [shrinkLanding, setShrinkLanding] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      setTimeout(() => setCoinLanded(true), 1000);
      setTimeout(() => setShrinkLanding(true), 2000);
      setTimeout(() => setCoinLanded(false), 3000);
      setTimeout(() => setShrinkLanding(false), 3000);
      setTimeout(() => setClicked(false), 3000);
    }
    props.onClick();
  };

  return (
    <span className="ml-2">
      <button
        className={`${styles['tip-button']} ${clicked ? styles['clicked'] : ""} ${shrinkLanding ? styles['shrink-landing'] : ""
          } ${coinLanded ? styles['coin-landed'] : ""}`}
        onClick={handleClick}
      >
        <span className={styles['tip-button__text']}>{props.children}</span>
        <div className={styles['coin-wrapper']}>
          <div className={styles['coin']}>
            <div className={styles['coin__middle']}></div>
            <div className={styles['coin__back']}></div>
            <div className={styles['coin__front']}></div>
          </div>
        </div>
      </button>
    </span>
  );
}

export default Button;
