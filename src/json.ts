import { JsonMap } from '@iarna/toml/index.js';
import { JetpackSerializer } from './shared-types.js';
import JSON5 from 'json5';

export class Json implements JetpackSerializer<unknown, any> {
  constructor(public space = 0) {}
  parse = JSON.parse;
  stringify(input: unknown) {
    return JSON.stringify(input, undefined, this.space);
  }
};

export class Json5 implements JetpackSerializer<unknown, any> {
  constructor(public space = 0) {}
  parse = JSON5.parse;
  stringify(input: unknown) {
    return JSON.stringify(input, undefined, this.space);
  }
};

/**
 * Note that we use a relatively inefficient all-at-once approach to parsing
 * NDJson here. NDJson is newline delimited precisely so that it can be processed
 * as a stream, so this is suboptimal even though it generates correct output.
 *
 * That said, the parse/stringify nomenclature fits our quick-and-dirty approach
 * to file format handling, so it's a win for now. Just don't lean on it for any
 * performance intensive stuff.
 */
export class NdJson implements JetpackSerializer<unknown[], any[]> {
  validate = (input: unknown) => Array.isArray(input);
  parse = function (data: string) {
    const lines = data.trim().split('\n');
    return lines.map((line) => JSON.parse(line));
  };
  stringify = function (data: unknown[]): string {
    return data.map((item) => JSON.stringify(item, undefined, 0)).join('\n');
  };
};
