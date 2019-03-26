#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

git checkout gh-pages

rm -rf assets
rm -rf components

mv docs/.vuepress/dist/* .

rm -rf docs

git add -A
git commit -m 'deploy zhaKU docs'

git push

echo '发布完成'