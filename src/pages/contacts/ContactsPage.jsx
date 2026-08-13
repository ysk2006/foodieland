import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import SEO from "@/components/SEO";
import Button from "@/components/ui/button/Button";
import Newsletter from "@/components/pages/home/newsletter/Newsletter";
import RecipeRelated from "@/components/pages/recipe/related/RecipeRelated";
import { PATHS } from "@/app/router/paths";
import { contactInfo } from "@/data/mockContact";
import { getRecipeCards } from "@/data/mockRecipe";
import { usePageSEO } from "@/hooks/usePageSEO";

import styles from "./ContactsPage.module.scss";

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

const enquiryTypes = ["General", "Recipes", "Advertising", "Collaborations"];

const initialForm = {
    name: "",
    email: "",
    subject: "",
    enquiry: "General",
    message: "",
};

function ContactsPage() {
    const seo = usePageSEO({
        title: "Contact us",
        description:
            "Questions, ideas or a recipe you would like to see next — write to the Foodieland team.",
        path: PATHS.CONTACTS,
        image: "/jpg/hero-4.jpg",
        type: "website",
    });

    const [form, setForm] = useState(initialForm);
    const [sent, setSent] = useState(false);
    const recipes = getRecipeCards().slice(4, 8);

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
        <>
            <SEO {...seo} />
            <div className={styles.page}>
                <header className={styles.hero}>
                    <h1>Contact us</h1>
                    <p>
                        Share a question, a collaboration idea or a dish you
                        want us to cook next. We read every message.
                    </p>
                </header>

                <div className={styles.body}>
                    <img
                        className={styles.photo}
                        src="/jpg/hero-4.jpg"
                        alt="A plate from the Foodieland kitchen"
                    />

                    {sent ? (
                        <p className={styles.success}>
                            Thank you! Your message is on its way. We will get
                            back to you soon.
                        </p>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <label>
                                    Name
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label>
                                    Email address
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Your email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div className={styles.row}>
                                <label>
                                    Subject
                                    <input
                                        name="subject"
                                        type="text"
                                        placeholder="Subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label>
                                    Enquiry type
                                    <select
                                        name="enquiry"
                                        value={form.enquiry}
                                        onChange={handleChange}
                                    >
                                        {enquiryTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                            <label>
                                Messages
                                <textarea
                                    name="message"
                                    rows={6}
                                    placeholder="Write your message..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <Button type="submit" size="large">
                                Submit
                            </Button>
                        </form>
                    )}
                </div>

                <div className={styles.details}>
                    {details.map(({ id, icon: Icon, label, value }) => (
                        <div key={id} className={styles.detail}>
                            <span>
                                <Icon size={20} />
                            </span>
                            <div>
                                <small>{label}</small>
                                <p>{value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Newsletter />
                <RecipeRelated
                    recipes={recipes}
                    title="Check out the delicious recipe"
                />
            </div>
        </>
    );
}

export default ContactsPage;
