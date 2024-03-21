import Image from 'next/image'
import React from 'react';
import styles from './styles.module.css'
import Timer from '@/components/Timer/Timer';

const page = () => {
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
        <Image src={"/android logo white.png"} className={styles.smallBrand} width={100} height={50}/>
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
      <section id='roadmap' className={styles.roadmap}>
        <h2>Roadmap</h2>
        <Image src={'/roadmap.png'} width={400} height={400} />
      </section>
      {/* Try App */}
      <Timer/>
    </div>
  )
}

export default page
