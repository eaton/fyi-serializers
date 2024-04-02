import test from 'ava';
import jetpack from '@eatonfyi/fs-jetpack';
import { Yaml } from '../src/index.js';

test('parse sample file', t => {
  const raw = jetpack.read('./test/fixtures/data.yaml');
  t.not(raw, undefined);

  if (raw) {
    const data = Yaml.parse(raw);

    t.is(data.title, "YAML Data");

    t.is(data.boolean, true);
    t.is(data.number, 100.1);

    t.is(data.objArray[0].key1, "value1");
  }
})