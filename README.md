# Lerna experiment

 For extended commands via Makefile see `CONTRIBUTING.md`.

## To start project:
* `npm install --global lerna`
* `npm install`
* `npm run bootstrap --stream --hoist`
* `npm run packagr --stream`

## Project structure

```
|__ node_modules                  * hoisted common npm modules
|__ packages                      * lerna packages
    |__ eagle-app-reports         * lerna scope (A)
    |     |__node_modules         * link to common npm modules
    |__ eagle-app-insights        * lerna scope (B)
    |     |__node_modules         * link to common npm modules
    |__ eagle-app-splash-page     * lerna scope (C)
    |     |__node_modules         * link to common npm modules
    |__ ...
    |__ eagle-lib-components      * lerna scope (D). Shared Angular modules 
    |     |__ module-1            * Ng module
    |     |__ module-n
    |     |__ ...
    | 
    |__ eagle-lib-scripts          * lerna scope (E). Shared-libs not angular libs       
    |     |__ shared-script-modules * not angular modules
    |     |__ shared-script        * not angular libs
    |     |__ shared-js-lib
    |
    |__ eagle-server-static        * lerna scope (F). Prod subdomain POC demo server.
    |__ ...                        * finale AOT build of all the apps
```

## To serve app:
* `lerna run start --stream --scope <app-name>`

## Build apps:

* Build all apps: `lerna run build  --stream`
* Build certain app: `lerna run build --stream --scope <app-name>`

## Publish apps:

* Publish all apps: `lerna publish`
* Publish certain app: `lerna publish --stream --scope <app-name>`

## Lerna add module

* `lerna add <package>[@version] [--dev]`  
Example: `lerna add module-1 --scope=module-2 # Install module-1 to module-2`

## Lerna clean all node_modules

* `lerna clean`

## TODO: Discuss next questions:

* where we will store our packages? artifactory?
* do we have configuration for users permission on backend side? 
* do we need endpoint for list of applications available for user? Who can add this?

## TODO: Need to fix

* fix build with aot flag
* check rollup https://github.com/rollup/rollup