# Quick and dirty serializer support

A set of handy-if-janky tools for serializing data I run into when spelunking through old archives and/or database snapshots. Although it's not required for use, these pair well with my fork of fs-jetpack, which can automatically serialize and deserialize files based on extension, if you provide it with the right helpers.

## Caveats

None of these serializers are meant to be used with large quantities of data. Fire a few hundred megs of data at any one of them, and things are likely to get unpleasant. For anything significant you're much better off picking a format and package from scracth, and probably using a streaming parser or something.

…But, when you've just got a bundle of files in a particular format and you want to rifle through that data in a hurry? It can be a lifesaver. That's what I use it for, and that's why it's here.

## The Rogues' Gallery

- **`base64`**, is silly easy using builtin functions, but served as a nice demo.
- **`csv`** and **`tsv`**, via [csv-parse](https://github.com/adaltas/node-csv) and [csv-stringify](https://github.com/adaltas/node-csv).
- **`json`**, **`json5`**, and **`nsjson`**, via the [json5](https://github.com/json5/json5) project.
- **`php`**, Various PHP-based CMSs like Wordpress and Drupal have a tendency to jam internal configuration data into DB tables using PHP's serialize/deserialize functions. The code to decihper these little bundles of joy was found in [php-js](http://phpjs.org/) and updated with improved type-checking typing and error handling.
- **`ini`**, via the [ini](https://github.com/npm/ini) project.
- **`plist`**, via the [plist](https://github.com/TooTallNate/plist.js) project.
- **`yaml`**, via the [yaml](https://github.com/eemeli/yaml) project.
- **`toml`**, via the [@iarna/toml](https://github.com/iarna/iarna-toml) project.
- **`ejson`**, and **`bson`** via the [js-bson](https://github.com/mongodb/js-bson) project.
- **`frontmattter`** in markdown files, in either JSON or YAML format, via the [grey-matter](https://github.com/jonschlinkert/gray-matter) project.
