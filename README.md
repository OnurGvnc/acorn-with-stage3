# acorn-with-stage3

When we use the features in stage3 without babel plugins, the webpack will give an error similar to the following

```
ERROR in ./index.js 2:9
Module parse failed: Unexpected token (2:9)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| class Rectangle {
>   height = 0;
|   width;
|
```

In the package.json file resolutions section, declare that the `acorn-with-stage3` package is used to replace the `acorn` package that the webpack uses as a parser.

`package.json`:

```json
{
  ...
  "resolutions": {
    "acorn": "npm:acorn-with-stage3"
  },
  "dependencies": {

```

**important note:** "resolutions" works with `yarn` (_[selective dependency resolutions](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/)_).
To use with `npm`: https://github.com/rogeriochaves/npm-force-resolutions

[`./example`](./example)

- https://github.com/acornjs/acorn
- https://github.com/acornjs/acorn-stage3
