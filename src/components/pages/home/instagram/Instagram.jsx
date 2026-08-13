import { Heart } from "lucide-react";
import { Link } from "react-router";

import { mockInstagramReviews } from "@/data/mockInstagram";
import { HeaderContactsItems } from "@/context/header";
import InstagramIcon from "@/assets/icons/instagram.svg";

import styles from "./Instagram.module.scss";

const instagramLink =
    HeaderContactsItems.find((item) => item.name === "instagram")?.url ??
    "/instagram.com";

function Instagram() {
    return (
        <section className={styles.instagram}>
            <div className={styles.instagram__text}>
                <h2>Check out @foodieland on Instagram</h2>
                <p>
                    Real reviews from people who cook our recipes — follow us
                    for more tasty ideas every day.
                </p>
            </div>

            <div className={styles.instagram__grid}>
                {mockInstagramReviews.map((review) => (
                    <Link
                        key={review.id}
                        to={instagramLink}
                        className={styles.instagram__card}
                    >
                        <img
                            className={styles["instagram__card--image"]}
                            src={review.image}
                            alt={`Review by @${review.username}`}
                        />
                        <div className={styles["instagram__card--overlay"]}>
                            <div className={styles["instagram__card--user"]}>
                                <img
                                    src={review.avatar}
                                    alt=""
                                    aria-hidden="true"
                                />
                                <span>@{review.username}</span>
                            </div>
                            <p>{review.quote}</p>
                            <span className={styles["instagram__card--likes"]}>
                                <Heart size={14} fill="currentColor" />
                                {review.likes}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            <Link to={instagramLink} className={styles.instagram__button}>
                <img src={InstagramIcon} alt="" width={18} height={18} />
                View our Instagram
            </Link>
        </section>
    );
}

export default Instagram;
