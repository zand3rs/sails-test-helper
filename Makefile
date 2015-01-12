#
# Makefile for mocha
# by: zander - zand3rs@gmail.com
#
# usage:
# make test
# make test <path/to/test>
#
# override default MOCHA_OPTS:
# make MOCHA_OPTS='-C -R dot' test
#

ENV_VARS=NODE_ENV=test PORT=9999
MOCHA=$(ENV_VARS) ./node_modules/.bin/mocha
MOCHA_OPTS=-R spec

check: test

test:
	@$(MOCHA) $(MOCHA_OPTS) $(addprefix test/,$(patsubst test/%,%,$(filter-out $@,$(MAKECMDGOALS))))

clean:
	@echo 'deleting node_modules...'
	@\rm -Rf ./node_modules


%:
	@:

.PHONY: check clean test
