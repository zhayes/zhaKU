#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

git checkout gh-pages

mv docs/.vuepress/dist/* .

rm -rf docs

git add -A
git commit -m 'deploy zhakU press'

git push

echo'完成'