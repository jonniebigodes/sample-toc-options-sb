# What is this?

A simple example of how to use [Storybook](https://storybook.js.org/) beta with [Vite](https://vitejs.dev/).

## Issue uncovered

When adding Chromatic and trying to publish it to Chromatic, I get the following error:

```bash
const stringWidth = require('string-width');
                    ^

Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/my-user/my-folder/react-vite-docs-toc/node_modules/string-width/index.js from /Users/my-user/my-folder/react-vite-docs-toc/node_modules/cli-table3/src/utils.js not supported.
Instead change the require of index.js in /Users/my-user/my-folder/react-vite-docs-toc/node_modules/cli-table3/src/utils.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (/Users/my-user/my-folder/react-vite-docs-toc/node_modules/cli-table3/src/utils.js:1:21)
    at Object.<anonymous> (/Users/my-user/my-folder/react-vite-docs-toc/node_modules/cli-table3/src/table.js:2:15)
    at Object.<anonymous> (/Users/my-user/my-folder/react-vite-docs-toc/node_modules/cli-table3/index.js:1:18)
    at Object.<anonymous> (/Users/my-user/my-folder/react-vite-docs-toc/node_modules/@storybook/core-server/dist/index.js:113:7757)
    at Object.<anonymous> (/Users/my-user/my-folder/react-vite-docs-toc/node_modules/@storybook/cli/dist/generate.js:11:4494)
    at Object.<anonymous> (/Users/my-user/my-folder/react-vite-docs-toc/node_modules/@storybook/cli/bin/index.js:9:1)
    at Object.<anonymous> (/Users/my-user/my-folder/react-vite-docs-toc/node_modules/storybook/index.js:3:1) {
  code: 'ERR_REQUIRE_ESM'
}

Node.js v18.16.0
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Tested it with Node 16 and v18.16.0. Probably it's related ` "vite": "^4.4.0"`. Only way to make it work is to purge `node_modules` and `yarn.lock` and install everything again.
