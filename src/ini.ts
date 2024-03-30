import { parse, stringify } from 'ini';
import { JetpackSerializer } from './shared-types.js';

export const Ini: JetpackSerializer = {
  parse,
  stringify,
};
