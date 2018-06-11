#!/bin/sh

# Author : Richard
# Copyright (c) Tutorialspoint.com
# Script follows here:
# Reference: https://www.tutorialspoint.com/unix/unix-file-management.htm

# build
echo Build
yarn build

# delete original files
# change dir
cd ./product
echo .git CNAME | xargs -n 1 echo -not -name | xargs find . | awk 'NR>1' | xargs rm -rf

# copy
cd ../build 
cp -r * ../product

# change dir
cd ../product
# commit
echo commit
git add .
git commit -am 'build'
# push
echo Push 
git push