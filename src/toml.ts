import { parse, stringify } from '@iarna/toml';
import { JetpackSerializer } from './shared-types.js';

export const Toml: JetpackSerializer = {
  parse,
  stringify,
};
