import plist from 'plist';
import { JetpackSerializer } from './shared-types.js';

export const Plist: JetpackSerializer<plist.PlistValue, plist.PlistValue> = {
  validate: (data: unknown) => true,
  parse: plist.parse,
  stringify: plist.build,
};
