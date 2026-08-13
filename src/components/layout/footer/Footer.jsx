import { Link } from "react-router";

import HeaderLogo from "@/components/layout/header/components/logo/HeaderLogo";
import { HeaderNavList, HeaderContactsItems } from "@/context/header";
import { SITE_NAME } from "@/config/site";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__top}>
          <div className={styles["footer__top--brand"]}>
            <HeaderLogo />
            <p>
              {SITE_NAME} is a place where you can please your soul and tummy
              with delicious food recipes of all cuisine.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className={styles.footer__nav}>
              {HeaderNavList.map((item) => (
                <li key={item.id}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.footer__bottom}>
          <p className={styles.footer__copy}>
            © 2026 {SITE_NAME}. All rights reserved.
          </p>
          <div className={styles.footer__social}>
            {HeaderContactsItems.map((contact) => (
              <Link
                key={contact.id}
                to={contact.url}
                aria-label={contact.name}
              >
                <img src={contact.icon} alt="" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
