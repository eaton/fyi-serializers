import { JetpackSerializer } from './shared-types.js';

export const Base64: JetpackSerializer<string, string> = {
  validate: (data: unknown) => typeof data === 'string',
  parse: (input: string) => Buffer.from(input, 'base64').toString('utf8'),
  stringify: (input: string) => Buffer.from(input, 'utf-8').toString('base64'),
};
