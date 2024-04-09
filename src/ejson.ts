import pkg from 'ejson';
const { parse, stringify } = pkg;
import { JetpackSerializer } from './shared-types.js';

type StringifyOptions = Required<Parameters<typeof stringify>>[1];

export class Ejson implements JetpackSerializer {
  constructor(public options: StringifyOptions = {}) {}
  parse = parse;
  stringify(input: any) {
    return stringify(input, this.options);
  } 
};
