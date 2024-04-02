import test from 'ava';
import jetpack from '@eatonfyi/fs-jetpack';
import { Toml, Php } from '../src/index.js';

test('parse sample file', t => {
  const tomlData = jetpack.read('./test/fixtures/data.toml');
  const phpData = jetpack.read('./test/fixtures/data.php.txt');

  t.not(tomlData, undefined);
  t.not(phpData, undefined);
  t.deepEqual(Toml.parse(tomlData ?? ''), Php.parse(phpData ?? ''));
})