import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import nextPackage from "next/package.json";
import { Info } from "components/info";
import { Footer } from "components/footer";
// import output from "../scraper/output.csv"

export default function Home({ }) {
  // console.log(output)
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.container}>
              <div>
                <p>Input box to put in your location (city)</p>
              </div>
              <div className={styles.inputContainer}>
              <input />
                <button>I want Crossfit!</button>
              </div>
              <div>
                <Info />
              </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
