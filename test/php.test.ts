import test from 'ava';
import jetpack from '@eatonfyi/fs-jetpack';
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
  const raw = jetpack.read('./test/fixtures/data.php.txt');
  t.is(raw, Php.stringify(data));

  t.deepEqual(Php.parse(raw ?? ''), data);
})