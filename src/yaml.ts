import { parse, stringify } from 'yaml';
import type {
  ParseOptions,
  ToStringOptions
} from 'yaml';
import type { GenericSerializer } from './generic-serializer.js';

export type YamlOptions = {
  parse?: ParseOptions,
  stringify?: ToStringOptions,
};

export class Yaml implements GenericSerializer {
  constructor(public options: YamlOptions = {}) {}
  parse(input: string) {
    return parse(input, this.options.parse);
  }
  stringify(input: any) {
    return stringify(input, this.options.stringify);
  }
};
