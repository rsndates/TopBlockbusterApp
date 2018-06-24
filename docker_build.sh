#!/usr/bin/env bash
set -xeuo pipefail


docker build -t androidsdk.image -f ./scripts/AndroidSDK_Dockerfile .
docker build -t cordova.image -f ./scripts/Cordova_Dockerfile .
