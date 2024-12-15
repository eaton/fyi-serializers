import pkg from 'ejson';
const { parse, stringify } = pkg;
import type { GenericSerializer } from './generic-serializer.js';

type StringifyOptions = Required<Parameters<typeof stringify>>[1];

export class Ejson implements GenericSerializer {
  constructor(public options: StringifyOptions = {}) {}
  parse = parse;
  stringify(input: any) {
    return stringify(input, this.options);
  } 
};
