/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");


import { env } from "./src/env.mjs";
import withPWAFactory from '@ducanh2912/next-pwa';
import packageJson from './package.json' assert { type: 'json' };

const withPWA =  withPWAFactory({
  dest: 'public',
  disable: env.PWA_ENABLED === 'false',
});

/** @type {import("./src/types/publicRuntimeConfig").PublicRuntimeConfig} */
const publicRuntimeConfig = {
  version: packageJson.version
}

/** @type {import("next").NextConfig} */
const config = withPWA({
  publicRuntimeConfig,
  reactStrictMode: true,
  swcMinify: true,
  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
});

export default config;
