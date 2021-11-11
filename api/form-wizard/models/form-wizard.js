'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        afterFind: async (results, params, populate) => {
            return results.map(e => {
                e.formString = JSON.stringify(e.forms)
                return e
            })
        },
        afterFindOne: async (results, params, populate) => {
            // const newResult = { ...results, formString: JSON.stringify(results.forms) }
            results.formString = JSON.stringify(results.forms)
            return results
            // return results.map(e => {
            //     e.formString = JSON.stringify(e)
            //     return e
            // })
        },
    }
};
