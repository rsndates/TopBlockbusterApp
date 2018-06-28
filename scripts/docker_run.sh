#!/usr/bin/env bash
set -xeuo pipefail

docker run -i --rm -v "$PWD":/application rdates/blockbuster:latest sh -c "$@"

