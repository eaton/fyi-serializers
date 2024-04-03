import test from 'ava';
import fs from 'node:fs';
import { Php } from '../src/index.js';

const data = {
  title: "PHP Test",
  integer: 123,
  float: 123.4,
  boolean: true,
  booleanFalse: false,
  array: [1, 2, 3, "four"],
  object: { key: "value" }
};

test('parse sample file', t => {
  const raw = fs.readFileSync(new URL('./fixtures/data.php.txt', import.meta.url)).toString();
  
  t.is(raw, Php.stringify(data));
  t.deepEqual(Php.parse(raw ?? ''), data);
})