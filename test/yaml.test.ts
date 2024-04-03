import test from 'ava';
import fs from 'node:fs';
import { Yaml } from '../src/index.js';

test('parse sample file', t => {
  const raw = fs.readFileSync(new URL('./fixtures/data.yaml', import.meta.url)).toString();
  const data = Yaml.parse(raw);

  t.is(data.title, "YAML Data");

  t.is(data.boolean, true);
  t.is(data.number, 100.1);

  t.is(data.objArray[0].key1, "value1");
})