import { transform } from '@svgr/core';

export default async ({ file: { buffer, path }, options }) => {
  try {
    return {
      buffer: Buffer.from(await transform(buffer, options, { filePath: path }))
    };
  } catch (er) {
    throw er instanceof Error ? er : new Error(er);
  }
};
