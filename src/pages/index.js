import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LandingPage</title>
        <meta name="description" content="NextLandingPage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='header'>
        <h1>Header</h1>
      </header>

      <main className={styles.main}>
        <section>
          <h1>Introduction</h1>
        </section>
        <section>
          <h1>Features</h1>
        </section>
        <section>
          <h1>How it works</h1>
        </section>
        <section>
          <h1>Testimonials</h1>
        </section>
        <section>
          <h1>Signup form</h1>
        </section>
        <section>
          <h1>Team section</h1>
        </section>
        <section>
          <h1>Pricing section</h1>
        </section>
        <section>
          <h1>Resources section</h1>
        </section>
      </main>

      <footer className={styles.footer}>
          <h1>Footer</h1>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>

    </div>
  )
}
