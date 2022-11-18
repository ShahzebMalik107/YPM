import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const thankyou = () => {
  return (
    <section>
        <Head>
            <script dangerouslySetInnerHTML={{ __html:`
  gtag('event', 'conversion', {'send_to': 'AW-11019805029/hdhiCLrKxIEYEOXC04Yp'});`}} />
        </Head>
        <header className='ty-thankyou'>
            <div className="container"><img src="./logo.svg" alt="Logo YPM" /></div>
        </header>
        <div className="ty_main container">
            <h1 className='heading center'>Thank You</h1>
            <p className='paragraph ty-paragraph'>Your message has been received and someone from our Sales department will be in touch as soon as possible.</p>
            <img src="/typ.png" alt="" />
        </div>
    </section>
  )
}

export default thankyou