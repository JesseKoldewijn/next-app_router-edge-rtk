/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

const withPWA = require('next-pwa')({
  dest: 'public'
})

/** @type {import("next").NextConfig} */
const config = withPWA({
  reactStrictMode: true,
};

export default config;
