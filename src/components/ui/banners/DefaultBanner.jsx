import DefaultBannerTypes from "./components/default/types/DefaultBannerTypes";
import DefaultBannerText from "./components/default/text/DefaultBannerText";
import DefaultBannerTags from "./components/default/tags/DefaultBannerTags";
import Author from "../author/Author";
import Button from "../button/Button";
import CheckImage from "../image/CheckImage";

import Badge from "/public/png/Badge.png";
import { CirclePlay } from "lucide-react";

import styles from "./DefaultBanner.module.scss";

function DefaultBanner({
  type = "recipe",
  typeText = "Hot Recipes",
  title = "Spicy delicious chicken wings",
  description = "",
  tags = [],
  minutesCount = "",
  authorName = "John Smith",
  authorDate = "",
  authorAvatar,
  imageSrc = "/jpg/hero-1.jpg",
  imageAlt = "",
  isActive = true,
}) {
  return (
    <div className={styles.banner__wrapper}>
      {isActive && (
        <img
          className={styles["banner__wrapper--sticker"]}
          width={150}
          height={150}
          draggable="false"
          src={Badge}
          alt="badge"
        />
      )}
      <div className={styles["banner__wrapper--left"]}>
        <DefaultBannerTypes type={type} text={typeText} />
        <DefaultBannerText title={title} description={description} />
        <DefaultBannerTags tags={tags} minutesCount={minutesCount} />
        <div className={styles["banner__left--info"]}>
          <Author
            avatar={authorAvatar}
            title={authorName}
            date={authorDate}
          />
          <Button
            icon={<CirclePlay size={24} />}
            iconPosition="right"
            size="large"
          >
            View Recipes
          </Button>
        </div>
      </div>
      <div className={styles["banner__wrapper--right"]}>
        <CheckImage src={imageSrc} alt={imageAlt || title} />
      </div>
    </div>
  );
}

export default DefaultBanner;
