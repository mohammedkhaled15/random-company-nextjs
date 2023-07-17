"use client"
import Link from 'next/link'
import { links } from './data'
import styles from "./navbar.module.css"
import ThemeToggler from '../themeToggle/ThemeToggler'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href={"/"}>Mo.Next</Link>
      <div className={styles.links}>
        <ThemeToggler />
        {links.map(link => {
          return (
            <Link key={link.id} href={link.url}>{link.title}</Link>
          )
        })}
        <button className={styles.logout} onClick={() => console.log("logged out")}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar