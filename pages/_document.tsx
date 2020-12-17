import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>OscarERH</title>
          <meta name="description" content="Desarrollador web" />
          <meta
            name="keywords"
            content="Programador, Developer, React, Laravel"
          />
          <meta name="author" content="Oscar Ruiz" />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
