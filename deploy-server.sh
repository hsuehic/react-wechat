#!/bin/sh

# Author : Richard
# Copyright (c) Tutorialspoint.com
# Script follows here:
# Reference: https://www.tutorialspoint.com/unix/unix-file-management.htm

# build
echo 1. Build
yarn build

echo 2. Copy to remote
scp -r ./build/* root@www.gismall.com:/root/apps/wechat/public