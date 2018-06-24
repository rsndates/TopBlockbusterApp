#!/usr/bin/env bash
set -xeuo pipefail

docker run -i --rm -v "$PWD":/application androidsdk.image sh -c "$@"
docker run -i --rm -v "$PWD":/application cordova.image sh -c "$@"

