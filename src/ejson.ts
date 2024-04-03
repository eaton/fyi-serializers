import pkg from 'ejson';
import { JetpackSerializer } from './shared-types.js';

export const Ejson: JetpackSerializer = {
  parse: pkg.parse,
  stringify: pkg.stringify,
};
