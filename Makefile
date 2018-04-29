RED=\033[0;31m
BOLD_RED=\033[1;31m
GREEN=\033[0;32m
BOLD_GREEN=\033[1;32m
BLUE=\033[0;34m
BOLD_BLUE=\033[1;34m
BOLD=\033[1m
NC=\033[0m

STATUS_ERROR := ${BOLD_RED}✘${NC} Error
STATUS_OK := ${BOLD_GREEN}✔${NC} OK

APP_SPLASH_PAGE=eagle-app-splash-page
LIB_COMPONENTS=eagle-lib-components

list:
	./node_modules/.bin/lerna ls

tree-help:
	./node_modules/.bin/tree --help

tree: depth ?= 5
tree:
	cd ./
	@echo "${GREEN}Project structure without node_modules... ${NC}";\
 	./node_modules/.bin/tree -d -l $(depth) --ignore node_modules

# private
clean-packages-node-modules:
	./node_modules/.bin/lerna clean

clean-node-modules: clean-packages-node-modules
	@echo "${GREEN}Remove common node_modules... ${NC}";
	rm -r node_modules;

# private
install-npm:
	rm -r node_modules;\
	npm i;

bootstrap-repo: install-npm
	./node_modules/.bin/lerna bootstrap --stream --hoist --ignore-scripts -- --ignore-engines
	make list

update: clean-packages-node-modules
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

static-server:
	cd packages/eagle-server-static;\
	npm run start;

server-static-up: build-all static-server

fix-router:
	./node_modules/.bin/lerna run packagr --scope $(LIB_COMPONENTS);\
	./node_modules/.bin/lerna run build --stream --scope $(APP_SPLASH_PAGE);\
	make static-server;

