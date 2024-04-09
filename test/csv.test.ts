import test from 'ava';
import { Csv } from '../src/index.js';
import fs from 'node:fs';

test('parse sample file', t => {
  const raw = fs.readFileSync(new URL('./fixtures/data.csv', import.meta.url)).toString();
  const data = new Csv().parse(raw);
  t.is(data.length, 17);

  t.deepEqual(
    Object.keys(data[0]),
    ['year', 'miles', 'days', 'trips', 'countries', 'cities', 'carbon']
  );
});

test('collapsed columns', t => {
  const raw = fs.readFileSync(new URL('./fixtures/data.keys.csv', import.meta.url)).toString();
  const data = new Csv().parse(raw);
  t.is(data.length, 2);
  t.deepEqual(data[0].col3, ['test', 'another test']);
})

