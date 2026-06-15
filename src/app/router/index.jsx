import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import { routes } from "./routes";

const router = createBrowserRouter(routes);

function PageLoader() {
  return <div className="page-loader">Загрузка...</div>;
}

function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default AppRouter;
