# To reproduce
```bash
$ npm i
$ npm run lint
```

You'll get the following error.

```
/Users/resessh/src/github.com/resessh/repro-nuxtjs-composition-api-i-295/scriptToLint.js
  1:1   error  Resolve error: Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: No "exports" main resolved in /Users/resessh/src/github.com/resessh/repro-nuxtjs-composition-api-i-295/node_modules/@nuxtjs/composition-api/package.json
    at resolveExportsTarget (internal/modules/cjs/loader.js:596:11)
    at applyExports (internal/modules/cjs/loader.js:454:14)
    at resolveExports (internal/modules/cjs/loader.js:507:23)
    at Function.Module._findPath (internal/modules/cjs/loader.js:635:31)
    at findModulePath (/Users/resessh/src/github.com/resessh/repro-nuxtjs-composition-api-i-295/node_modules/eslint-import-resolver-alias/index.js:99:27)
    at Object.exports.resolve (/Users/resessh/src/github.com/resessh/repro-nuxtjs-composition-api-i-295/node_modules/eslint-import-resolver-alias/index.js:75:10)
    at v2 (/Users/resessh/src/github.com/resessh/repro-nuxtjs-composition-api-i-295/node_modules/eslint-module-utils/resolve.js:117:23)
    at withResolver (/Users/resessh/src/github.com/resessh/repro-nuxtjs-composition-api-i-295/node_modules/eslint-module-utils/resolve.js:122:16)
    at fullResolve (/Users/resessh/src/github.com/resessh/repro-nuxtjs-composition-api-i-295/node_modules/eslint-module-utils/resolve.js:139:22)
    at relative (/Users/resessh/src/github.com/resessh/repro-nuxtjs-composition-api-i-295/node_modules/eslint-module-utils/resolve.js:84:10)  import/no-unresolved
  1:25  error  Unable to resolve path to module '@nuxtjs/composition-api'
```
