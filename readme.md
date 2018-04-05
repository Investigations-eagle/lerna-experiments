# Lerna experiment

## TODO: Find answers to next questions:

* how to lazy load module with sub routes (for ex. login module) @dosandk
* how to crate shared libs bundle (moment + highcharts, etc.) @skrechko
* how to make shared ui-controls libs (without lazy loading) @skrechko
* how to create server for mapping projects to subdomains
* analyze pros/cons of the lerna approach (compare with nrwl/nx)

## To start project:
* `npm install --global lerna`
* `npm install`
* `lerna run packagr`
* `lerna bootstrap`

## To serve app:
* `lerna run start --scope <app-name>`

## Build all apps:
* `lerna run build`

## Build certain app:
* `lerna run build --scope <app-name>`
