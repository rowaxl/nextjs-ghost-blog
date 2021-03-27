import { useEffect } from 'react'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      navigator.serviceWorker
        .register('/static/sw.js')
        .then(reg => {
          console.log('Service worker registered')
        })
        .catch(e => {
          console.error('Error during register sw: ', e)
        })
    }
  }, [])

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
