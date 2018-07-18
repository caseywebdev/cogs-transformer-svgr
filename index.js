const svgr = require('@svgr/core').default;

module.exports = async ({file: {buffer, path}, options}) => {
  try {
    return {buffer: Buffer.from(await svgr(buffer, options, {filePath: path}))};
  } catch (er) {
    throw er instanceof Error ? er : new Error(er);
  }
};
