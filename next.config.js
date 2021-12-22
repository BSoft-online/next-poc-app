/** @type {import('next').NextConfig} */

const withLinaria = require('next-linaria');
const { withSentryConfig } = require('@sentry/nextjs');

const sentryWebpackPluginOptions = {
  silent: true
};

module.exports = withSentryConfig(
  withLinaria({
    /* config options here */
  }),
  sentryWebpackPluginOptions
);
