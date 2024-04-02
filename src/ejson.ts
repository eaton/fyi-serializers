import { EJSON } from 'bson';
import { JetpackSerializer } from './shared-types.js';

export const Ejson: JetpackSerializer = {
  parse: EJSON.parse,
  stringify: EJSON.stringify,
};
