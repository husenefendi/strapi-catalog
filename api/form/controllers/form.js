'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    contentType: async (ctx) => {
        console.log({ ctx });
        return { id: 'tes' }
    }
};
