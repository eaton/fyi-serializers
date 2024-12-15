import type { GenericSerializer } from './generic-serializer.js';
type BufferEncoding =
| "ascii"
| "utf8"
| "utf-8"
| "utf16le"
| "utf-16le"
| "ucs2"
| "ucs-2"
| "base64"
| "base64url"
| "latin1"
| "binary"
| "hex";

export class Base64 implements GenericSerializer<string, string> {
  constructor(public encoding: BufferEncoding = 'utf8') {}
  validate = (data: unknown) => typeof data === 'string';
  parse = (input: string) => Buffer.from(input, 'base64').toString(this.encoding);
  stringify = (input: string) => Buffer.from(input, this.encoding).toString('base64');
};
