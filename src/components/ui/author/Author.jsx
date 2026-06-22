import styles from "./Author.module.scss";

function Author({ avatar, title, date }) {
  return (
    <div className={styles.avatar__wrapper}>
      <img className={styles.avatar} src={avatar} alt={title} />
      <div className={styles["avatar__wrapper--text"]}>
        <span className={styles.name}>{title}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
}

export default Author;
