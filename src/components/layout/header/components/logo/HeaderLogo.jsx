import { Link } from "react-router";
import Logo from "@/assets/logo.svg";

import styles from "./HeaderLogo.module.scss";

const IsHeaderHaveLogo = ({ logo, text = "undefiend" }) => {
  // Проверка есть ли логотип, если нету, отобразить текст
  if (logo) {
    return (
      <img
        width={110}
        height={30}
        src={logo}
        alt="logo"
        className={styles.logo}
      />
    );
  }
  return <span className={styles.fallbackText}>{text}</span>;
};

function HeaderLogo() {
  return (
    <Link className={styles.header__logo}>
      <IsHeaderHaveLogo logo={Logo} text="Foodieland" />
    </Link>
  );
}

export default HeaderLogo;
