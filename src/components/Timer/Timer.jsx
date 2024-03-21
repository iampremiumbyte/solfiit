'use client'

import styles from './styles.module.css'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const Timer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("Thu Mar 23 2024") - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });
    
  return (
    <section className={styles.countdown}>
    <h2>Try our app in</h2>
    <div className={styles.timerContainer}>
      <div no className={styles.timerItem}>
        <h3 suppressHydrationWarning >{timeLeft.days}</h3>
        <h5>Days</h5>
      </div>
      <div className={styles.timerItem}>
        <h3 suppressHydrationWarning >{timeLeft.hours}</h3>
        <h5>Hours</h5>
      </div>
      <div className={styles.timerItem}>
        <h3 suppressHydrationWarning >{timeLeft.minutes}</h3>
        <h5>Minutes</h5>
      </div>
      <div className={styles.timerItem}>
        <h3 suppressHydrationWarning >{timeLeft.seconds}</h3>
        <h5>Seconds</h5>
      </div>
    </div>
    <p>Contract address <a href="#">643788447382934574839347577483947</a></p>
    <div className={styles.twoButtons}>
      <a href="#">
        <Image src={"/birdeye.png"} width={100} height={50}/>
      </a>
      <a href="#">
      DEXSCREENER
      </a>
    </div>
  </section>
  )
}

export default Timer