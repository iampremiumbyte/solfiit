'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'

const page = () => {
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
    <div className='container'>
      {/* HERO */}
      <section className={styles.hero}>
      <div className={styles.content}>
      <h1> <span className={styles.lightText}>Staying physically fit </span> in a digital world.</h1>
      </div>
    <Image src={'/SolFit base mockup dark.png'} width={500} height={1000}/>
      </section>
      {/* BRANDS */}
      <div className={styles.brands}>
        <Image src={"/ipfs.webp"} width={100} height={50}/>
        <Image src={"/phtg.webp"} width={100} height={50}/>
        <Image src={"/android-logo-12377.png"} width={100} height={50}/>
        <Image src={"/flare.png"} width={100} height={50}/>
      </div>
      {/* OVERVIEW */}
      <section className={styles.flexView}>
        <h2>Revolutionary application allowing users to stake their $SOLFIT and gain monetary rewards for being fit.
</h2>
        <Image src={'/SolFit Dark 1.png'} width={400} height={400} />
      </section>
      <section className={styles.flexView}>
        <Image src={'/SolFit Dark 2.png'} width={400} height={400} />
        <h2>Clear overview of your activity and rewards</h2>
      </section>
      <section className={styles.flexView}>
        <h2>Go into detail in your SolFit application</h2>
        <Image src={'/SolFit Dark 3.png'} width={400} height={400} />
      </section>
      <section className={styles.flexView}>
        <Image src={'/SolFit Dark 4.png'} width={400} height={400} />
        <h2>Redeem your points for $SOLFIT</h2>
      </section>
      <section className={styles.flexView}>
        <h2> Easy-to-access staking platform</h2>
        <Image src={'/SolFit Dark 5.png'} width={400} height={400} />
      </section>
      <section className={styles.flexView}>
        <Image src={'/SolFit Dark 6.png'} width={400} height={400} />
        <h2>Stay up to date with the latest news</h2>
      </section>
      <section id='raodmap' className={styles.roadmap}>
        <Image src={'/roadmap.jpg'} width={400} height={400} />
      </section>
      {/* Try App */}
      <section className={styles.countdown}>
        <h2>Try our app in</h2>
        <div className={styles.timerContainer}>
          <div no className={styles.timerItem}>
            <h3>{timeLeft.days}</h3>
            <h5>Days</h5>
          </div>
          <div className={styles.timerItem}>
            <h3>{timeLeft.hours}</h3>
            <h5>Hours</h5>
          </div>
          <div className={styles.timerItem}>
            <h3>{timeLeft.minutes}</h3>
            <h5>Minutes</h5>
          </div>
          <div className={styles.timerItem}>
            <h3>{timeLeft.seconds}</h3>
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
    </div>
  )
}

export default page
