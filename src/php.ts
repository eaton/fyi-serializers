import type { GenericSerializer } from './generic-serializer.js';
import { serialize, unserialize } from 'php-serialize'

export class Php implements GenericSerializer {
  parse = unserialize;
  stringify = serialize;
}
