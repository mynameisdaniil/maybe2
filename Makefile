NODE = /usr/bin/env node
NPM = /usr/bin/env npm
MODULES = ./node_modules/

default: test

test:
	$(NODE) ./test.js

examples:
	$(NODE) ./examples.js

install:
	rm -rf $(MODULES)
	$(NPM) install
