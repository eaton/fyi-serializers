# Eaton's quick and dirty serializers

A set of handy-if-janky helpers for parsing and stringifying data I run into when spelunking through old archives and/or database snapshots.

## Caveats

None of these serializers are meant to be used with large quantities of data. Fire a few hundred megs of data at any one of them, and things are likely to get unpleasant. For anything significant you're much better off picking a format and package from scracth, and probably using a streaming parser or something.

…But, when you've just got a bundle of files in a particular format and you want to rifle through that data in a hurry? It can be a lifesaver. That's what I use it for, and that's why it's here.

## The Rogues' Gallery

- **`base64`** is silly simple, but served as a nice demo while I was testing FS-Jetpack integration.
- **`csv`** and **`tsv`**, via [csv-parse](https://github.com/adaltas/node-csv) and [csv-stringify](https://github.com/adaltas/node-csv). They're configured to assume header columns exist, parse the records to an array of objects, and be forgiving of missing/extra columns from line to line.
- **`ejson`**, a JSON variant used by MongoDB that can roundtrip dates, regexes, and buffers, via the [ejson](https://github.com/primus/EJSON) project.
- **`frontmatter`** in markdown files, in either JSON or YAML format, via the [grey-matter](https://github.com/jonschlinkert/gray-matter) project.
- **`ini`**, the old reliable, via the [ini](https://github.com/npm/ini) project.
- **`json`**, **`json5`**, and **`nsjson`**, via the [json5](https://github.com/json5/json5) project.
- **`php`**. Yeah, various PHP-based CMSs like Wordpress and Drupal have a tendency to jam internal configuration data into DB tables using PHP's serialize/deserialize functions. The code to decihper these little bundles of joy descends from [php-js](http://phpjs.org/); I updated it with additional type-checking typing and error handling.
- **`plist`**, the XML doctype Apple uses to store tons of MacOS config files, via the [plist](https://github.com/TooTallNate/plist.js) project.
- **`toml`**, GitHub founder Tom Preston-Warner's personal config file language, via the [@iarna/toml](https://github.com/iarna/iarna-toml) project.
- **`yaml`**, the venerable config storage format that shows up everywhere, via the [yaml](https://github.com/eemeli/yaml) project.

## Using them with FS Jetpack

Most of these are exposed as parse/stringify pairs that can be passed into [my fork of fs-jetpack](https://github.com/eaton/fs-jetpack), where they'll transparently do their thing when reading and writing files with a specified extension. Again, this is absolutely not the most efficient way to handle large piles of data, but for small to middlin' ones it's extremely handy.

```javascript
import jetpack from '@eatonfyi/fs-jetpack';
import { Yaml } from '@eatonfyi/serializers;

jetpack.setSerializer('.yaml', new Yaml());

const config = jetpack.read('./my-config.yaml', 'auto');

console.log(config); // Actual parsed data, not the raw string. Yay.
```
