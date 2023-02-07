#!/usr/bin/env sh
set -e
###########################################################
#提交地址，可以手动设置：git@github.com:wekbs/library.git
PUSH_ADDR=`git remote get-url --push origin` 
COMMIT_INFO=`git describe --all --always --long`
#打包生成的文件夹路径
DIST_PATH=docs/.vuepress/dist
#推送的分支
PUSH_BRANCH=gh-pages
###########################################################

yarn docs:build

cd ${DIST_PATH}

git init
git add -A
git commit -m "deploy, ${COMMIT_INFO}"
git push -f ${PUSH_ADDR} HEAD:${PUSH_BRANCH}

cd -
rm -rf ${DIST_PATH}