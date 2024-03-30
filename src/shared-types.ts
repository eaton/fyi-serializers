export interface JetpackSerializer<Input = any, Output = any> {
  validate?: (input: Input) => boolean;
  stringify: (input: Input) => string;
  parse: (input: string) => Output;
}
