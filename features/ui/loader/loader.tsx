import styles from "./loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.loadingIcon}
        src="/icons/loader.svg"
        alt="loading"
      />
    </div>
  );
};
