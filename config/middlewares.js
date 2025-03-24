module.exports = [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'", "*"],
          'script-src': ["'self'", "'unsafe-inline'", "*.cincopa.com"],
          'style-src': ["'self'", "'unsafe-inline'", "*.cincopa.com"],
          'img-src': ["'self'", "data:", "*"],
        },
      },
    },
  },
  'strapi::logger',
  'strapi::errors',
  // 'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
