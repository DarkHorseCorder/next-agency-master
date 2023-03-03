import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang='en-US'>
        <Head>
          <link rel='manifest' href='/static/manifest.json' />

          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='application-name' content='Samfolio' />
          <meta name='apple-mobile-web-app-title' content='Samfolio' />
          <meta name='theme-color' content='#06e249' />
          <meta name='msapplication-navbutton-color' content='#06e249' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='black-translucent'
          />
          <meta name='msapplication-starturl' content='/' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />

          <link
            rel='icon'
            type='image/png'
            sizes='512x512'
            href='/static/icons/favicon512.png'
          />

          <link
            rel='apple-touch-icon'
            type='image/png'
            sizes='512x243'
            href='/static/icons/favicon.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
