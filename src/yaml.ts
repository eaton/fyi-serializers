import { parse, stringify } from 'yaml';
import { JetpackSerializer } from './shared-types.js';

export const Yaml: JetpackSerializer = {
  parse,
  stringify,
};
