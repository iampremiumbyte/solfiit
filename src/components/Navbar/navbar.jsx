import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
        <div className="container">
        <a href="#" className={styles.logo}>
            <Image src={'/logo2.png'} width={150} height={50} alt='logo'/>
        </a>
        <ul className={styles.links}>
            <a href="#roadmap">Roadmap</a>
            <a href="https://t.me/solfitcoinportal">Telegram</a>
            <a href="https://x.com/solfitcoin">Twitter</a>
            <a href="https://whitepaper.solfit.app/" className={styles.actionnLink}>Whitepaper</a>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar