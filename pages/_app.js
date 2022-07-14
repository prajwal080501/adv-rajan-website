import '../styles/globals.css'
import { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }) {

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return <>
  <Header darkMode={darkMode} setDarkMode={setDarkMode} handleDarkMode={handleDarkMode}/>
  <Component darkMode={darkMode} setDarkMode={setDarkMode} handleDarkMode={handleDarkMode}  {...pageProps} />
  <Footer darkMode={darkMode} setDarkMode={setDarkMode} handleDarkMode={handleDarkMode}/>
  </>
}

export default MyApp
