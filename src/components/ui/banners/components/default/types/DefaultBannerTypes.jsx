import { BannerTypes } from "@/context/bannerTypes";

import styles from "./DefaultBannerTypes.module.scss";

function DefaultBannerTypes({ type, text }) {
  const bannerType = BannerTypes.find((item) => item.name === type);

  return (
    <div className={styles.type__wrapper}>
      {bannerType ? (
        <img
          width={24}
          height={24}
          key={bannerType.id}
          src={bannerType.icon}
          alt={bannerType.name}
        />
      ) : (
        <img src="@/assets/png/recipe.png" alt="Не определен type" />
      )}
      <span className={styles.type__title}>{text}</span>
    </div>
  );
}

export default DefaultBannerTypes;
