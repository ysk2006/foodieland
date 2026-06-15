import { NavLink } from "react-router";
import { HeaderNavList } from "@/context/header";

import styles from "./HeaderMenu.module.scss";

function HeaderMenu() {
  return (
    <nav className={styles.header__menu}>
      <ul className={styles["header__menu--list"]}>
        {HeaderNavList.map((menu) => (
          <li
            className={styles["header__menu--item"]}
            key={menu.id}
            id={menu.link}
          >
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? `${styles["header__menu--pending"]}`
                  : isActive
                    ? `${styles["header__menu--active"]}`
                    : ""
              }
              to={menu.link}
            >
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderMenu;
