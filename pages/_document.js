import Document, { Head, Main, NextScript, Html } from 'next/document'
import flush from 'styled-jsx/server'

class DocumentWrapper extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <Html lang="en">
        <Head></Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentWrapper
