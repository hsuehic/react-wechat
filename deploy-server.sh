#!/bin/sh

# Author : Richard
# Copyright (c) Tutorialspoint.com
# Script follows here:
# Reference: https://www.tutorialspoint.com/unix/unix-file-management.htm

# build
echo Build
yarn build

scp -r ./build/* root@www.gismall.com:/root/apps/wechat/public