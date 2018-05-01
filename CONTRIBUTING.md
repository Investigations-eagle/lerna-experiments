## About Monorepo approuche

Please read [Why is Babel a monorepo?](https://github.com/babel/babel/blob/master/doc/design/monorepo.md)

## Developing

Make sure that `@angular/cli` is globally installed with version = `1.7.4`.

```sh
  npm uninstall -g @angular/cli
  npm cache verify
  npm install -g @angular/cli@1.7.4
```

### Setup

```bash
 $ git clone https://github.com/Investigations-eagle/lerna-experiments.git
 $ cd lerna-experiments
 $ git checkout clean-development-flow
 # to inatall all the repo (common and packages) npm dependencies
 $ make bootstrap-repo
```

Check the repo structure:
```bash
 $ make tree
```


Add domains to your `hosts` file:

```bash
 # Eagle POC Monorepo demo URLs
 # ========================================================== 
 127.0.0.1    eagle.local             www.eagle.local
 127.0.0.1    my.eagle.local          www.my.eagle.local
 127.0.0.1    reports.eagle.local     www.reports.eagle.local
 127.0.0.1    insights.eagle.local    www.insights.eagle.local
 # More POC apps ...
```


To build all apps **once** similar to prod ENV you can either run:

```bash
 $ make server-static-up
```

Static demo server uses port `9000`. Navigate to `http://my.eagle.local:9000`. That is gonna be **Splash Page** .

### Live development

Run app/lib in a watch mode run:

```bash
 # To see the list of available apps/libs
 $ make list

 # start some particular app
 $ make start-dev app=eagle-app-insights
```

Rebuild packages in live mode run:

```bash
 # spacific pack by name
 $ make packagr app=eagle-lib-components

 # rebuild all packaged app
 $ make packagr-all 
```

Update packages npm dependencies simply run:

```bash
 $ make update-deps
```

Sample of an update from lib to prod code build:

```bash
  $ make build-lib-fix
```