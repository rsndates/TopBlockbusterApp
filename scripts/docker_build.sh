#!/usr/bin/env bash
set -xeuo pipefail


docker build -t rdates/blockbuster:latest -f ./scripts/Blockbuster_Dockerfile .
