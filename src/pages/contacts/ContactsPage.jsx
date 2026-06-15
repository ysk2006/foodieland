import SEO from "@/components/SEO";
import { usePageSEO } from "@/hooks/usePageSEO";
import { PATHS } from "@/app/router/paths";

function ContactsPage() {
  const seo = usePageSEO({
    title: "О нас",
    description:
      "Несколько способов обратной связяи с нами, если у вас появились вопросы или предложения",
    path: PATHS.CONTACTS,
    image: "/og-image.jpg",
  });

  return (
    <>
      <SEO {...seo} />
      <div className="contacts-page">
        <p>contacts page</p>
      </div>
    </>
  );
}

export default ContactsPage;
