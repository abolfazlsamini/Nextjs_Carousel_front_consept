"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { slides } from "./carousel_data.js";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Carousel() {
  const [active_img, setActive_img] = useState(0);
  function next() {
    if (active_img < slides.length - 1) setActive_img(active_img + 1);
    else setActive_img(0);
  }
  function back() {
    if (active_img > 0) setActive_img(active_img - 1);
    else setActive_img(slides.length - 1);
  }
  function set_img(index) {
    setActive_img(index);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [active_img]);

  return (
    <div className={styles.carousel}>
      {slides?.map((item, index) => {
        if (index === active_img)
          return (
            <>
              <div
                className={styles.carousel_detail}
                style={{
                  backgroundImage: `linear-gradient(to left, ${item.color}, transparent)`,
                }}
              >
                <div className={styles.carousel_detail_inside}>
                  <h2 style={{ paddingBottom: "10px" }}>New Rewards</h2>
                  <div style={{ paddingBottom: "10px" }}>
                    {item.discription}
                  </div>
                  <Link className={styles.link} href={item.link}>
                    link
                  </Link>
                </div>
              </div>

              <div
                key={item.alt}
                className={styles.img_main}
                style={{
                  backgroundImage: `linear-gradient(to right, ${item.color}, transparent)`,
                }}
              >
                <Image
                  className={`${styles.grid} ${styles.carousel_img}`}
                  src={item.src}
                  alt="img1"
                  fill
                  priority
                  key={item.alt}
                />
              </div>
            </>
          );
      })}

      <div className={styles.control}>
        <button className={styles.nav_button} onClick={back}>
          &#10094;
        </button>
        {slides?.map((item, index) => {
          return (
            <div key={item.alt} className={styles.nav_img_parent}>
              <Image
                className={
                  index === active_img
                    ? `${styles.carousel_nav} ${styles.carousel_active}`
                    : `${styles.carousel_nav}`
                }
                src={item.src}
                alt={item.alt}
                fill
                priority
                key={item.alt}
                onClick={() => set_img(index)}
              />
            </div>
          );
        })}
        <button className={styles.nav_button} onClick={next}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
