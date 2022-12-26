import Head from 'next/head'
import React from 'react'
import Navbar from '../Navbar'
import styles from './MainLayout.module.css'

const MainLayout = ({children}:any) => {
    return (
        <div className="styles.container">
          <Head>
            <title>Home</title>
            <meta name="description" content="HomePage" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <main className={styles.main}>
                {children}
          </main>
        </div>
      )
}

export default MainLayout