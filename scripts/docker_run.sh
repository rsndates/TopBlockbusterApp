#!/usr/bin/env bash
set -xeuo pipefail

docker run -it  -p 8080:8080 -p 8100:8100 --rm --name movies -v "$PWD":/application rdates/blockbuster:latest

