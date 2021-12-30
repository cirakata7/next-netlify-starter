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
        <Header title=".hello" />
        <p className="description">
          <code>nitishjeet7<del>.ml</del></code> to <code>nitishjeet7.online</code>
        </p>
      </main>


    </div>
  )
}
