const buildForms = require('./buildForms');

exports.sourceNodes = async (gatsbyData, pluginOptions) => {  
  await buildForms(gatsbyData, pluginOptions);
};

module.exports = handleSourceNodes;

exports.sourceNodes;