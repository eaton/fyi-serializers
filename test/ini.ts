import test from 'ava';
import jetpack from '@eatonfyi/fs-jetpack';
import { Ini } from '../src/index.js';

test('parse sample file', t => {
  const raw = jetpack.read('./test/fixtures/data.ini');
  t.not(raw, undefined);

  if (raw) {
    const data = Ini.parse(raw);

    t.is(data.title, "Ini Example");
    t.is(data.primitives.boolean, true);
    t.is(data.primitives.number, '100');
    t.is(data.primitives.text, "Example text");
  }
})