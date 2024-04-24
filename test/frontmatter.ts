import test from 'ava';
import { Frontmatter, FrontmatterInput } from '../src/index.js';
import { withoutEmptyValues } from '../src/util.js';

test('accept empty keys', t => {
  const parser = new Frontmatter();
  const data = {
    data: {
      title: 'Title',
      date: new Date(Date.now()),
      emptyKey: undefined,
      nullKey: null,
    },
    content: 'Body text'
  };

  t.notThrows(() => parser.stringify(data));

  console.log(parser.stringify(data));
});
