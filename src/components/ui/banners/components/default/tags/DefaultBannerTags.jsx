import { bannerTags } from "@/context/bannerTags";
import styles from "./DefaultBannerTags.module.scss";

function DefaultBannerTags({ tags = [], minutesCount = "" }) {
  const selectedTags = bannerTags.filter((tag) => tags.includes(tag.name));

  const formatTagDisplay = (tag) => {
    if (tag.name === "Minutes" && minutesCount) {
      return `${minutesCount} Minutes`;
    }
    return tag.name;
  };

  return (
    <div className={styles.tagsContainer}>
      {selectedTags.length > 0 ? (
        selectedTags.map((tag) => {
          const Icon = tag.icon;

          return (
            <span key={tag.id} className={styles.tag}>
              <Icon size={18} />
              <span>{formatTagDisplay(tag)}</span>
            </span>
          );
        })
      ) : (
        <span>No tags</span>
      )}
    </div>
  );
}

export default DefaultBannerTags;
