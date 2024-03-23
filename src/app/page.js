"use client";
import Image from "next/image";
import styles from "./page.module.css";
import slides from "./carousel_data";
import Carousel from "./carousel";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="Nextjs_Carousel_front_consept/next.svg"
        alt="img1"
        fill
        priority
        key={item.alt}
      />
      <Carousel />
      <div className={styles.grid}>
        <a
          href="https://nextjs.org/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </div>
    </main>
  );
}
