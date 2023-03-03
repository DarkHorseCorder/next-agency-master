import '../css/material.css'
import '../css/index.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Infobar from '../components/Infobar'
import About from '../components/About'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Head from 'next/head'

const index = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <title>Simanta</title>
        <meta name='Description' content='Minimal UI website'></meta>
        {/* Open Graph */}
        <meta
          property='og:title'
          content='Minimal website css ui'
          key='ogtitle'
        />
        <meta
          property='og:description'
          content='Minimal UI website'
          key='ogdesc'
        />
      </Head>
      <Navbar />
      <Header />
      <Infobar />
      <About />
      <Services />
      <Footer />
    </React.Fragment>
  )
}

export default index
