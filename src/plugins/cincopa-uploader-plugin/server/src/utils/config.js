module.exports = async ({ strapi }) => {
  const config = strapi.config.get('plugin.cincopa-uploader-plugin');
  const token = config.apiToken;
};
