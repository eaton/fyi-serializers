import plist, { PlistValue, PlistBuildOptions } from 'plist';
const { parse, build } = plist;
import { JetpackSerializer } from './shared-types.js';

export class Plist implements JetpackSerializer<string, PlistValue> {
  constructor(public options: PlistBuildOptions = {}) {}

  validate = (data: unknown) => true;
  parse(input: string) {
    return parse(input);
  }
  stringify(input: PlistValue) {
    return build(input, this.options);
  }
};
