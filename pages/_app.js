import React from "react";
import '../styles/index.css'
import Header from "../components/Layout/Header";
import Body from "../components/Layout/Body";
import Footer from "../components/Layout/Footer";

export default function MyApp({Component, pageProps}) {
  return <div>
    <Header/>
    <Body>
      <Component {...pageProps} />
    </Body>
    <Footer/>
  </div>
}
