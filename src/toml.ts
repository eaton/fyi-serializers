import { parse, stringify } from '@iarna/toml';
import { JetpackSerializer } from './shared-types.js';

export class Toml implements JetpackSerializer {
  parse = parse;
  stringify = stringify;
};
