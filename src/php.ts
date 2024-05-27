import { JetpackSerializer } from './shared-types.js';
import { serialize, unserialize } from 'php-serialize'

export class Php implements JetpackSerializer {
  parse = unserialize;
  stringify = serialize;
}
