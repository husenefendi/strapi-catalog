'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    custom: async (ctx) => {
        const { models } = strapi
        // console.log({ ctx, models: models.form.attributes });
        return { hello: 'world' }
    }
};
