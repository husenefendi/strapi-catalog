'use strict';

/**
 * my-api.js controller
 *
 * @description: A set of functions called "actions" of the `my-api` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.
    // Send 200 `ok`
    const modelKeys = Object.keys(strapi.models)
    ctx.send({
      message: 'ok',
      data: { list: modelKeys }
    });
  },
  detail: async (ctx) => {
    const { params: { id } } = ctx
    const { models } = strapi
    const theModel = models[id] || {}
    ctx.send({
      message: "gas",
      data: {
        modelName: id,
        attributes: theModel.attributes
      }
    })
  }
};
