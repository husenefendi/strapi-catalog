'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        async afterFind(results, params, populate) {
            return results.map(e => {
                return e.content_string = JSON.stringify(e.Content)
            })
        }
    },

};
