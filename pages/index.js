import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>.ml to .online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title=".hello" />
        <p className="description">
          <code><del>nitishjeet7.ml</del></code> to <a href="https://nitishjeet7.online"><code>nitishjeet7.online</code></a>
        </p>
      </main>


    </div>
  )
}
