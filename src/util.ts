export interface EmptyValueOptions {
  'undefined'?: boolean,
  'null'?: boolean,
  'emptyString'?: boolean,
  'emptyArray'?: boolean,
  'emptyTrimmedString'?: boolean
}


/**
 * Returns a deep clone of an object with no empty properties.
 */
export function withoutEmptyValues(input: unknown | Array<unknown> | Date, options: EmptyValueOptions = {}) {
  return omitDeep(input, v => {
    if (options.undefined !== false && v === undefined) return true;
    if (options.null !== false && v === null) return true;
    if (options.emptyArray !== false && Array.isArray(v) && v.length === 0) return true;
    if (options.emptyTrimmedString !== false && typeof v === 'string' && v.trim().length === 0) return true;
    if (options.emptyString !== false && typeof v === 'string' && v.length === 0) return true;
    return false;
  });
}

export type ComplexObject = {
  [key: string]: ComplexObject
}

export const omitDeep = <
  O extends unknown | Array<unknown> | Date,
  RO extends unknown | Array<unknown> | Date
>(
  item: O,
  omit: (value: unknown, key: string | number) => boolean
): RO => {
  // Handle dates - prevents dates from getting converted into empty {}
  if (item instanceof Date) {
    return item as unknown as RO

    // Handle arrays and walk them
  } else if (Array.isArray(item)) {
    return item.map((arrItem: O) => {
      return omitDeep<O, RO>(arrItem, omit)
    }) as unknown as RO

    // Handle objects
  } else if (typeof item === 'object' && item !== null) {
    // Walk over each entry in object
    return Object.entries(item as unknown as Record<string, unknown>).reduce(
      (acc, [key, value]) => {
        // FILTER OMIT KEY HERE
        if (!omit(value, key)) {
          acc[key as keyof RO] = omitDeep(value, omit)
        }
        return acc
      },
      {} as RO
    ) as RO

    // Handle all other types
  } else {
    return item as unknown as RO
  }
}