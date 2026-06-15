import { Link } from "react-router";

import SEO from "@/components/SEO";
import { PATHS } from "@/app/router/paths";
import { usePageSEO } from "@/hooks/usePageSEO";

function NotFoundPage() {
  const seo = usePageSEO({
    title: "Страница не найдена",
    description: "Запрашиваемая страница не существует",
    path: "/404",
    noIndex: true,
  });

  return (
    <>
      <SEO {...seo} />
      <div className="not-found-page">
        <h1>404</h1>
        <p>Страница не найдена</p>
        <Link to={PATHS.HOME}>На главную</Link>
      </div>
    </>
  );
}

export default NotFoundPage;
