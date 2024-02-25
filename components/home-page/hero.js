import Image from "next/image";

import styles from "./hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/avatar.png"
          alt="Khang's avatar"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi. I&apos;m Khangg</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        NextJS or Angular
      </p>
    </section>
  );
}

export default Hero;
