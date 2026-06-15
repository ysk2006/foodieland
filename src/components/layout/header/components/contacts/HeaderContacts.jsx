import { Link } from "react-router";
import { HeaderContactsItems as socialLinks } from "@/context/header";
import styles from "./HeaderContacts.module.scss";

function HeaderContacts() {
  return (
    <div className={styles.header__contacts}>
      {socialLinks.map((contact) => (
        <Link key={contact.id} to={contact.url} aria-label={contact.name}>
          <img src={contact.icon} alt={contact.name} />
        </Link>
      ))}
    </div>
  );
}

export default HeaderContacts;
