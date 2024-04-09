import { parse, stringify, EncodeOptions } from 'ini';
import { JetpackSerializer } from './shared-types.js';

export class Ini implements JetpackSerializer {
  constructor(public options: EncodeOptions = {}) {}
  parse = parse;
  stringify(input: string) {
    return stringify(input, this.options);
  }
};
