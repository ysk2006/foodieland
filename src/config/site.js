export const SITE_NAME = "Foodieland";

const DEFAULT_DEV_URL = "http://localhost:5173";

export function getSiteUrl() {
  const envUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  if (envUrl) return envUrl;

  if (import.meta.env.DEV) return DEFAULT_DEV_URL;

  if (typeof window !== "undefined") return window.location.origin;

  return "";
}

export function getCanonicalUrl(path = "/") {
  const base = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

export function getOgImageUrl(imagePath = "/og-image.jpg") {
  const normalizedPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return `${getSiteUrl()}${normalizedPath}`;
}
