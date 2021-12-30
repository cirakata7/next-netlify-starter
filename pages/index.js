import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="nitishjeet7<del>.ml</del> <br>to<br> nitishjeet7.online" />
        <p className="description">
          Get started by <del> editing</del> <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
