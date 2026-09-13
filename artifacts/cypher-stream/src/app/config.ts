const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const readOptionalEnv = (value: unknown): string | undefined => {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed ? trimTrailingSlash(trimmed) : undefined;
};

export const appConfig = Object.freeze({
  environment: import.meta.env.VITE_APP_ENV ?? "development",
  apiBaseUrl: readOptionalEnv(import.meta.env.VITE_API_URL),
  mediaBaseUrl: readOptionalEnv(import.meta.env.VITE_MEDIA_BASE_URL),
});

export type AppConfig = typeof appConfig;
