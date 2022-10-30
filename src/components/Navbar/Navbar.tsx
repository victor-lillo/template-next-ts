import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'
import classnames from 'classnames-creator'

import logo from '@public/logo.png'
import styles from './Navbar.module.scss'
import Logo from '@components/icons/Logo'

function Navbar() {
  const router = useRouter()

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navbar_container}>
          <Link href='/'>
            <Logo className={styles.logo} />
          </Link>

          <Link
            href='/about'
            className={classnames(styles.navlink, {
              [styles['navlink--active']]: router.pathname == '/about',
            })}
          >
            About us
          </Link>

          <Link
            href='/blog'
            className={classnames(styles.navlink, {
              [styles['navlink--active']]: router.pathname == '/blog',
            })}
          >
            Blog
          </Link>

          <Link
            href='/contact'
            className={classnames(styles.navlink, styles['navlink--right'], {
              [styles['navlink--active']]: router.pathname == '/items',
            })}
          >
            Contact
          </Link>
        </div>
      </header>
    </>
  )
}

export default Navbar
