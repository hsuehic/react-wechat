#!/bin/sh

# Author : Richard
# Copyright (c) Tutorialspoint.com
# Script follows here:
# Reference: https://www.tutorialspoint.com/unix/unix-file-management.htm

echo Input commit message:
read COMMITMESSAGE
# build
echo Build
yarn build

# delete original files
# change dir
cd ./product
echo .gitignore .git CNAME | xargs -n 1 echo -not -name | xargs find . | awk 'NR>1' | xargs rm -rf

# copy
cd ../build 
cp -r * ../product

# change dir
cd ../product
# commit
echo commit
git add .
git commit -am "$COMMITMESSAGE"

# push
echo Push 
git push