# Lerna experiment

## To start project:
* `npm install --global lerna`
* `npm install`
* `npm run packagr`
* `npm rub bootstrap`

## Project structure

```
|__ dist
|__ node_modules
|__ packages # lerna packages
    |__ app-reports
    |__ app-insights
    |__ app-splash-page
    |__ ...
    |__ @eagle # npm scope
            |__ shared-ng-modules # angular modules
                |__ module-1
                |__ module-2
                |__ module-n
                |__ ...
            |__ shared-libs # not angular libs
    |__ @another-scope # npm scope
            |__ shared-ng-modules # angular modules
            |__ shared-libs # not angular libs
    |__ ...
```

## To serve app:
* `lerna run start --scope <app-name>`

## Build apps:

* Build all apps: `lerna run build`
* Build certain app: `lerna run build --scope <app-name>`

## Publish apps:

* Publish all apps: `lerna publish`
* Publish certain app: `lerna publish --scope <app-name>`

## Lerna add module

* `lerna add <package>[@version] [--dev]`  
Example: `lerna add module-1 --scope=module-2 # Install module-1 to module-2`

## TODO: Find answers to next questions:

* how to lazy load module with sub routes (for ex. login module) + @dosandk
* how to crate shared libs bundle (moment + highcharts, etc.) + @skrechko
* how to make shared ui-controls libs (without lazy loading) @skrechko
* how to create server for mapping projects to subdomains
* analyze pros/cons of the lerna approach (compare with nrwl/nx) +
