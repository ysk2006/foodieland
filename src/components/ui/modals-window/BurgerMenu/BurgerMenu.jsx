import { Link } from "react-router";
import { HeaderNavList } from "@/context/header";
import styles from "./BurgerMenu.module.scss";
import { X } from "lucide-react";

function BurgerMenu({ burgerStatus, burgerToggle }) {
  return (
    <>
      {burgerStatus && (
        <div className={styles.burger__wrapper}>
          <div className={styles.burger__background} onClick={burgerToggle} />
          <div className={styles.burger__main}>
            <div className={styles["burger__main--header"]}>
              <button onClick={burgerToggle} className={styles.close__btn}>
                <X size={40} />
              </button>
            </div>
            {HeaderNavList.map((nav) => (
              <Link
                onClick={burgerToggle}
                key={nav.id}
                to={nav.link}
                className={styles.burger__link}
              >
                {nav.name}
              </Link>
            ))}
            <div className={styles.burger__description}>
              <p>
                In general, of course, the introduction of modern techniques
                helps improve the quality of distribution of internal reserves
                and resources. Diverse and rich experience tells us that the
                basic development vector allows us to complete important
                development tasks
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BurgerMenu;
