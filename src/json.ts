import { JsonMap } from '@iarna/toml/index.js';
import { JetpackSerializer } from './shared-types.js';
import JSON5 from 'json5';

export const Json: JetpackSerializer = {
  parse: JSON.parse,
  stringify: JSON.stringify,
};

export const Json5: JetpackSerializer = {
  parse: JSON5.parse,
  stringify: JSON5.stringify,
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
export const NdJson: JetpackSerializer<unknown[], JsonMap[]> = {
  validate: (input: unknown) => Array.isArray(input),
  parse: function (data: string) {
    const lines = data.trim().split('\n');
    return lines.map((line) => JSON.parse(line));
  },
  stringify: function (data: unknown[]): string {
    return data.map((item) => JSON.stringify(item, undefined, 0)).join('\n');
  },
};
