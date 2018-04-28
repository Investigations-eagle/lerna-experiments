list:
	./node_modules/.bin/lerna ls

# private
clean-node-modules:
	./node_modules/.bin/lerna clean

clean-all: clean-node-modules
	rm -r node_modules;

# private
install-npm:
	rm -r node_modules;\
	npm i;

bootstrap-repo: install-npm
	./node_modules/.bin/lerna bootstrap --stream --hoist --ignore-scripts -- --ignore-engines
	make list

update: clean-node-modules
	rm -rf $(1)/*/package-lock.json
	./node_modules/.bin/lerna bootstrap --stream --hoist --ignore-scripts -- --ignore-engines
	make list

# private
packagr:
	./node_modules/.bin/lerna run packagr

# make start app=@eagle/app-insights
start:
	@echo "${GREEN}Starting app=$(app)... ${NC}";
	./node_modules/.bin/lerna run start --stream --scope $(app)

build-all:
	make packagr
	./node_modules/.bin/lerna run build --stream

start-server-static: build-all static-server

static-server:
	cd packages/eagle-server-static;\
	npm run start;


fix-router:
	./node_modules/.bin/lerna run packagr --scope @eagle/lib-components;\
	./node_modules/.bin/lerna run build --stream --scope @eagle/app-splash-page;\
	make static-server;

