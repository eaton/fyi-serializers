import { stringify, Options as StringifyOptions } from 'csv-stringify/sync';
import { parse, Options as ParseOptions } from 'csv-parse/sync';
import is from '@sindresorhus/is';
import type { GenericSerializer } from './generic-serializer.js';

const stringifyDefaults: StringifyOptions = {};

const parseDefaults: ParseOptions = {
  cast: true,
  groupColumnsByName: true,
  relaxColumnCountLess: true,
  skipEmptyLines: true,
  trim: true
};

export class Csv implements GenericSerializer<unknown[], Record<string, unknown>[]> {
  constructor(
    public parseOptions: ParseOptions = parseDefaults,
    public stringifyOptions: StringifyOptions = stringifyDefaults
  ) {}

  validate = (data: unknown) => Array.isArray(data);
  parse(data: string, columns: boolean = true) {
    return parse(data, { ...this.parseOptions, delimiter: ',', columns });
  }
  stringify(input: unknown[]) {
    return stringify(input, {
      objectMode: is.plainObject(input[0]),
      header: is.plainObject(input[0]),
      ...this.stringifyOptions,
      delimiter: ',',
    });
  }
};

export class Tsv implements GenericSerializer<unknown[], Record<string, unknown>[]> {
  constructor(
    public parseOptions: ParseOptions = parseDefaults,
    public stringifyOptions: StringifyOptions = stringifyDefaults
  ) {}

  validate = (data: unknown) => Array.isArray(data);
  parse(data: string, columns: boolean = true) {
    return parse(data, { ...this.parseOptions, delimiter: '\t', columns });
  }
  stringify(input: unknown[]) {
    return stringify(input, {
      objectMode: is.plainObject(input[0]),
      header: is.plainObject(input[0]),
      ...this.stringifyOptions,
      delimiter: '\t',
    });
  }
};
