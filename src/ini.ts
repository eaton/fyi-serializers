import { parse, stringify, EncodeOptions } from 'ini';
import type { GenericSerializer } from './generic-serializer.js';

export class Ini implements GenericSerializer {
  constructor(public options: EncodeOptions = {}) {}
  parse = parse;
  stringify(input: string) {
    return stringify(input, this.options);
  }
};
