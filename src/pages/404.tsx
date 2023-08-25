import React from 'react'
import styles from '../styles/base.module.css'
import NavigationBar from '../components/navigation-bar'
import Footer from '../components/footer'

export default function Apply() {
  return (
    <>
      <main className={styles['base']}>
        <NavigationBar />
        <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '5rem', fontWeight: 'bold', margin: '0' }}>Erm.</p>
            <p style={{ margin: '0' }}>The page you&apos;re looking for is not found.</p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
