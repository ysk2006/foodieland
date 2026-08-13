import { useState } from "react";

import Button from "@/components/ui/button/Button";
import Vegan from "/public/png/vegan.png";
import Dessert from "/public/png/dessert.png";
import Chocolate from "/public/png/chocolate.png";
import Lunch from "/public/png/lunch.png";

import styles from "./Newsletter.module.scss";

function Newsletter() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email.trim()) return;
        setSubscribed(true);
        setEmail("");
    };

    return (
        <section className={styles.newsletter}>
            <div className={styles.newsletter__banner}>
                <img
                    className={styles["newsletter__deco--vegan"]}
                    src={Vegan}
                    alt=""
                    aria-hidden="true"
                />
                <img
                    className={styles["newsletter__deco--dessert"]}
                    src={Dessert}
                    alt=""
                    aria-hidden="true"
                />
                <img
                    className={styles["newsletter__deco--chocolate"]}
                    src={Chocolate}
                    alt=""
                    aria-hidden="true"
                />
                <img
                    className={styles["newsletter__deco--lunch"]}
                    src={Lunch}
                    alt=""
                    aria-hidden="true"
                />

                <div className={styles.newsletter__content}>
                    <h2>Deliciousness to your inbox</h2>
                    <p className={styles.newsletter__lead}>
                        Leave your email to get special offers and regular
                        discounts on your favorite recipes.
                    </p>

                    {subscribed ? (
                        <p className={styles.newsletter__success}>
                            Thanks for subscribing! Check your inbox soon.
                        </p>
                    ) : (
                        <form
                            className={styles.newsletter__form}
                            onSubmit={handleSubmit}
                        >
                            <input
                                id="newsletter-email"
                                type="email"
                                name="email"
                                placeholder="Your email address..."
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                aria-label="Email address"
                                required
                            />
                            <Button type="submit" size="large">
                                Subscribe
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Newsletter;
