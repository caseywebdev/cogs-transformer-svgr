import { default as svgr } from '@svgr/core';

export default async ({ file: { buffer, path }, options }) => {
  try {
    return {
      buffer: Buffer.from(
        (await svgr.default(buffer, options, { filePath: path })).replace(
          /import \* as React from "react";\n+/m,
          ''
        )
      )
    };
  } catch (er) {
    throw er instanceof Error ? er : new Error(er);
  }
};
