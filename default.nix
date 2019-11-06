#!/usr/bin/env nix-shell
#!nix-shell -i bash -p nodejs firefox python

test -x ./node_modules/.bin/web-ext || npm install
npm run start
