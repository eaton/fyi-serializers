import { parse, stringify } from '@iarna/toml';
import type { GenericSerializer } from './generic-serializer.js';

export class Toml implements GenericSerializer {
  parse = parse;
  stringify = stringify;
};
