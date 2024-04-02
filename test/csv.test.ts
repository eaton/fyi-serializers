import test from 'ava';
import jetpack from '@eatonfyi/fs-jetpack';
import { Csv } from '../src/index.js';

test('parse sample file', t => {
  const raw = jetpack.read('./test/fixtures/data.csv');
  t.not(raw, undefined);

  if (raw) {
    const data = Csv.parse(raw);
    t.is(data.length, 17);

    t.deepEqual(
      Object.keys(data[0]),
      ['year', 'miles', 'days', 'trips', 'countries', 'cities', 'carbon']
    );
  }
});

test('collapsed columns', t => {
  const raw = jetpack.read('./test/fixtures/data.keys.csv');
  t.not(raw, undefined);

  if (raw) {
    const data = Csv.parse(raw);
    t.is(data.length, 2);
    t.deepEqual(data[0].col3, ['test', 'another test']);
  }
})