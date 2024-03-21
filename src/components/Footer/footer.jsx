import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
      <span>&copy; 2024 by Solfit</span>
        <div className={styles.socials}>
            <a href="https://x.com/solfitcoin">
              <Image src={"/x.png"} width={30} height={20}/>
            </a>
            <a href="https://t.me/solfitcoinportal">
              <Image src={"/telegram.png"} width={30} height={20}/>
            </a>
            <a href="https://medium.com/@solanafitcoin">
              <Image src={"/medium.png"} width={30} height={20}/>
            </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer