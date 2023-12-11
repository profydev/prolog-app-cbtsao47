import { Routes } from "@config/routes";
import styles from "./index.module.scss";
import { Button } from "@features/ui";

const HomePage = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.imgWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.img}
            src="/icons/logo-large.svg"
            alt="Prolog logo"
          />
        </div>
        <div className={styles.links}>
          <a href={Routes.home}>Home</a>
          <a href={Routes.products}>Products</a>
          <a href={Routes.documentation}>Documentation</a>
          <a href={Routes.pricing}>Pricing</a>
        </div>
        <div className={styles.buttonWrapper}>
          <a href={Routes.projects}>
            <Button className={styles.button}>Open Dashboard</Button>
          </a>
        </div>
      </header>
      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

export default HomePage;
