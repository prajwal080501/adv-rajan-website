import '../styles/globals.css'
import { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {AnimatePresence} from 'framer-motion'
import Script from 'next/script'
import { useEffect } from "react";
import Head from 'next/head'
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return <>
  <Head>

  </Head>
  <Script></Script>
  <AnimatePresence>
  <NextNProgress
    color="#426cf5"
    startPosition={0.3}
    stopDelayMs={200}
    height={6}
    duration={500}
    showOnShallow={true}
    showOnMedium={true}
    showOnHeavy={true}
    style={{ zIndex: 999 }}
  />
  <Header darkMode={darkMode} setDarkMode={setDarkMode} handleDarkMode={handleDarkMode}/>
  <Component darkMode={darkMode} setDarkMode={setDarkMode} handleDarkMode={handleDarkMode}  {...pageProps} />
  <Footer darkMode={darkMode} setDarkMode={setDarkMode} handleDarkMode={handleDarkMode}/>
  </AnimatePresence>
  </>
}

export default MyApp
