import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import Button from "@/components/ui/button/Button";
import { contactInfo } from "@/data/mockContact";

import styles from "./Contact.module.scss";

const details = [
    {
        id: "address",
        icon: MapPin,
        label: "Location",
        value: contactInfo.address,
    },
    { id: "phone", icon: Phone, label: "Phone", value: contactInfo.phone },
    { id: "email", icon: Mail, label: "Email", value: contactInfo.email },
    { id: "hours", icon: Clock, label: "Hours", value: contactInfo.hours },
];

const initialForm = {
    name: "",
    email: "",
    message: "",
};

function Contact() {
    const [form, setForm] = useState(initialForm);
    const [sent, setSent] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSent(true);
        setForm(initialForm);
    };

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.contact__text}>
                <h2>Get in touch</h2>
                <p>
                    Share your wishes, questions or feedback — we read every
                    message and would love to hear from you.
                </p>
            </div>

            <div className={styles.contact__body}>
                <div className={styles.contact__info}>
                    {details.map(({ id, icon: Icon, label, value }) => (
                        <div key={id} className={styles["contact__info--item"]}>
                            <span className={styles["contact__info--icon"]}>
                                <Icon size={20} />
                            </span>
                            <div>
                                <span className={styles["contact__info--label"]}>
                                    {label}
                                </span>
                                <p>{value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <form className={styles.contact__form} onSubmit={handleSubmit}>
                    {sent ? (
                        <p className={styles.contact__success}>
                            Thank you! Your message is on its way.
                        </p>
                    ) : (
                        <>
                            <div className={styles["contact__form--row"]}>
                                <div className={styles["contact__form--field"]}>
                                    <label htmlFor="contact-name">Name</label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles["contact__form--field"]}>
                                    <label htmlFor="contact-email">Email</label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        placeholder="Your email address"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles["contact__form--field"]}>
                                <label htmlFor="contact-message">
                                    Your wish
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="Tell us what you think or what you'd like to see next..."
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                />
                            </div>
                            <Button type="submit" size="large">
                                Send message
                            </Button>
                        </>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact;
