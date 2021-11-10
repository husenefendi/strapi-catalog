'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        async beforeCreate(data) {
            console.log({ before: data })
        },
        async beforeFind(params, populat) {
            // console.log({ beforefind: { params, populat } })
        },
        async afterFind(results, params, populate) {
            // console.log({ afterFind: { results: results[0], params, populate } })
            return results.map(e => {
                return e.content_string = JSON.stringify(e.Content)
            })
        }
    },

};
