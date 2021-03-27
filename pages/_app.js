import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Blaze Blog</title>
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next.js + Ghost blog. Author: rowaxl0, For Educational Purpose only." />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
