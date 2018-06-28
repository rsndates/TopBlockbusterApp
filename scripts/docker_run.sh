#!/usr/bin/env bash
set -xeuo pipefail

docker run -it -p 80:8080 --rm -v "$PWD":/application rdates/blockbuster:latest sh -c "$@"

