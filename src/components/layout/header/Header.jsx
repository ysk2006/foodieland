import HeaderLogo from "./components/logo/HeaderLogo";
import HeaderMenu from "./components/menu/HeaderMenu";
import HeaderContacts from "./components/contacts/HeaderContacts";
import BurgerMenu from "@/components/ui/modals-window/BurgerMenu/BurgerMenu";

import { Menu } from "lucide-react";

import styles from "./Header.module.scss";
import { useState } from "react";

function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerStatus = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <header className={styles.header}>
      <BurgerMenu
        burgerStatus={isBurgerOpen}
        burgerToggle={toggleBurgerStatus}
      />
      <div className="container">
        <div className={styles.header__wrapper}>
          <HeaderLogo />
          <HeaderMenu />
          <HeaderContacts />
          <button
            onClick={toggleBurgerStatus}
            className={styles["header__wrapper--burger"]}
          >
            <Menu size={25} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
