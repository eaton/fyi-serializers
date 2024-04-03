import test from 'ava';
import fs from 'node:fs';
import { Toml } from '../src/index.js';

test('parse sample file', t => {
  const raw = fs.readFileSync(new URL('./fixtures/data.toml', import.meta.url)).toString();
  const data = Toml.parse(raw);

  t.is(data.title, "TOML Example");

  t.is(data.primitives.boolean, true);
  t.is(data.primitives.float, 1234.1);
  t.deepEqual(data.primitives.date, new Date("2000-02-14T07:32:00-08:00"));

  t.is(data.structures.deeply.nested, "value");

  t.is(data.features[1234], "numeric key");
})