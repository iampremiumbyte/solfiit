import React from 'react'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <span>&copy; 2024 by SOlfit</span>
        <div className={styles.socials}>
            <a href="https://x.com/solfitcoin">Twitter</a>
            <a href="https://t.me/solfitcoinportal">Telegram</a>
        </div>
    </footer>
  )
}

export default Footer