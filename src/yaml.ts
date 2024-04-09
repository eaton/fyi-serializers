import { parse, stringify } from 'yaml';
import type {
  ParseOptions,
  ToStringOptions
} from 'yaml';

import { JetpackSerializer } from './shared-types.js';

export class Yaml implements JetpackSerializer {
  constructor(public parseOptions: ParseOptions = {}, public stringifyOptions: ToStringOptions = {}) {}
  parse(input: string) {
    return parse(input, this.parseOptions);
  }
  stringify(input: any) {
    return stringify(input, this.stringifyOptions);
  }
};
