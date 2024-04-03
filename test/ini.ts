import test from 'ava';
import fs from 'node:fs';
import { Ini } from '../src/index.js';

test('parse sample file', t => {
  const raw = fs.readFileSync(new URL('./fixtures/data.ini', import.meta.url)).toString();
  const data = Ini.parse(raw);

  t.is(data.title, "Ini Example");
  t.is(data.primitives.boolean, true);
  t.is(data.primitives.number, '100');
  t.is(data.primitives.text, "Example text");
})