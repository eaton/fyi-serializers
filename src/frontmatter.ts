import matter, { GrayMatterFile, GrayMatterOption } from 'gray-matter';
import { encode, decode } from 'entities';
import type { GenericSerializer } from './generic-serializer.js';
import { isObject } from '@sindresorhus/is';
import { emptyDeep } from 'empty-deep';

export type FrontmatterInput = {
  content: string;
  data: Record<string, unknown>;
};

type GreyMatterOptions = GrayMatterOption<matter.Input, {}>;

export class Frontmatter implements GenericSerializer<FrontmatterInput, GrayMatterFile<matter.Input>> {
  constructor(public options: GreyMatterOptions = {}) {}

  validate(data: unknown) {
    return isObject(data);
  }

  parse(input: string) {
    return matter(input, this.options);
  }
  
  stringify(input: FrontmatterInput) {
    const { content, data } = input;

    // Some exotic characters ... caused problems. We're UTF encoding and then decoding
    // by default, which — distressingly — seemed to solve the problems.
    const scrubbed = content ? decode(encode(content, { level: 1, mode: 0 }), {
      level: 1,
      mode: 0
    }) : '';

    return matter.stringify(content || '', emptyDeep(data) as FrontmatterInput, this.options);
  }
};
