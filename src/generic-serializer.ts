export interface GenericSerializer<Input = any, Output = any, Options = Record<string, unknown>> {
  validate?: (input: Input) => boolean;
  stringify: (input: Input) => string;
  parse: (input: string) => Output;
}
