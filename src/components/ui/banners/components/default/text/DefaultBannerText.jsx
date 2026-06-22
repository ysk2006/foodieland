import styles from "./DefaultBannerText.module.scss";

function DefaultBannerText({ title, description }) {
  return (
    <div className={styles.text__wrapper}>
      <h1 className={styles["text__wrapper--title"]}>{title}</h1>
      <div className={styles["text__wrapper--description"]}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DefaultBannerText;
