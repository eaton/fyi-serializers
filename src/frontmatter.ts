import matter, { GrayMatterFile } from 'gray-matter';
import { encode, decode } from 'entities';
import { JetpackSerializer } from './shared-types.js';
import { isObject } from '@sindresorhus/is';

export type FrontmatterInput = {
  content: string;
  data: Record<string, unknown>;
};

export const Frontmatter: JetpackSerializer<
  FrontmatterInput,
  GrayMatterFile<string>
> = {
  validate: (data: unknown) => isObject(data),
  parse: (input: string) => matter(input),
  stringify: (input: FrontmatterInput) => {
    const { content, data } = input;

    // Some exotic characters ... caused problems. We're UTF encoding and then decoding
    // by default, which — distressingly — seemed to solve the problems.
    const scrubbed = decode(encode(content, { level: 1, mode: 0 }), {
      level: 1,
      mode: 0,
    });

    return matter.stringify(scrubbed, data);
  },
};
