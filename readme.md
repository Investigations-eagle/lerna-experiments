# Lerna experiment

## TODO: Find answers to questions:

* lazy loaded module with sub routes (for ex. login module) @dosandk
* shred libs bundle (moment + highcharts, etc.) @skrechko
* shared ui controls libs (without lazy loading) @skrechko
* create server for mapping projects to subdomains

## To start project:
* `npm install --global lerna`
* `npm install`
* `lerna run packagr`
* `lerna bootstrap`

## To serve project:
* `lerna run start --scope <app-name>`

## Build all apps:
* `lerna run build`

## Build certain app:
* `lerna run build --scope <app-name>`
